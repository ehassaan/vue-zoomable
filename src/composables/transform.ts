import { computed, onMounted, Ref, ref, watch } from "vue";
import type { ZoomableEvent } from "../entities/ZoomableEvent";

const originMap = {
  center: { x: 0.5, y: 0.5 },
  top: { x: 0.5, y: 0 },
  bottom: { x: 0.5, y: 1 },
  left: { x: 0, y: 0.5 },
  right: { x: 1, y: 0.5 },
  'top-left': { x: 0, y: 0 },
  'top-right': { x: 1, y: 0 },
  'bottom-left': { x: 0, y: 1 },
  'bottom-right': { x: 1, y: 1 },
};

export function useTransform({
  props,
  onChange,
  container,
  target,
}: { props: any; onChange: any; container: Ref<HTMLElement>; target: Ref<HTMLElement>; }) {

  const pan = ref({ x: 0, y: 0 });
  const zoom = ref(0);
  const origin = ref({ x: 0, y: 0 });

  onMounted(() => {
    zoom.value = props.minZoom;

    pan.value = {
      x: props.pan != null ? props.pan.x : props.initialPanX,
      y: props.pan != null ? props.pan.y : props.initialPanY,
    };

    if (props.zoom) {
      zoom.value = props.zoom;
    }
    else if (props.initialZoom >= props.minZoom && props.initialZoom <= props.maxZoom) {
      zoom.value = props.initialZoom;
    }
    if (container.value && target.value) {
      origin.value = getDefaultOrigin(container.value, target.value);
    }
  });

  watch(
    () => props.zoom,
    () => {
      if (!isNaN(props.zoom)) {
        zoom.value = props.zoom;
      }
    }
  );

  watch(
    () => props.pan,
    () => {
      if (props.pan) {
        pan.value.x = props.pan.x;
        pan.value.y = props.pan.y;
      }
    }, { deep: true });

  function changeZoom(deltaZoom: number, eventSource: string, zoomOrigin?: { x: number, y: number; }) {

    if (isNaN(deltaZoom) || deltaZoom === 0) return;

    // calculate the new zoom value including all the bounds and store the old value for later compare if an event should be sent
    const oldZoom = zoom.value;
    let newZoom = zoom.value + deltaZoom;

    if (newZoom > props.maxZoom) newZoom = props.maxZoom;
    else if (newZoom < props.minZoom) newZoom = props.minZoom;

    if (Math.abs(oldZoom - newZoom) < 0.0001) return;

    zoom.value = newZoom;

    if (zoomOrigin) {
      const center = estimateTargetCenter(container.value, pan.value);

      const deltaPan = {
        x: (newZoom - oldZoom) * ((center.x - zoomOrigin.x) / oldZoom),
        y: (newZoom - oldZoom) * ((center.y - zoomOrigin.y) / oldZoom),
      };
      console.log("Delta Pan: ", deltaPan, center, zoomOrigin);
      changePan(deltaPan.x, deltaPan.y, 'zoom');
    }

    let event: ZoomableEvent = {
      zoom: newZoom,
      delta: {
        zoom: deltaZoom,
        pan: {
          x: 0,
          y: 0
        },
      },
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: 0,
        deltaY: 0,
      },
      type: eventSource
    };
    onChange("zoom", event);
  };

  function changePan(deltaX: number, deltaY: number, eventType: string) {
    if (isNaN(deltaX)) deltaX = 0;
    if (isNaN(deltaY)) deltaY = 0;

    pan.value = {
      x: pan.value.x + deltaX,
      y: pan.value.y + deltaY,
    };

    let event: ZoomableEvent = {
      zoom: zoom.value,
      delta: {
        zoom: 0,
        zoomOrigin: { x: 0, y: 0 },
        pan: {
          x: deltaX,
          y: deltaY
        },
      },
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: deltaX,
        deltaY: deltaY
      },
      type: eventType,
    };
    onChange("panned", event);
  }

  function goHome(eventSource: string) {

    // reset zoom
    zoom.value = props.initialZoom;
    onChange("zoom", {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: 0,
        deltaY: 0,
      },
      type: eventSource,
    });

    // reset pan
    let delta = {
      x: props.initialPanX - pan.value.x,
      y: props.initialPanY - pan.value.y,
    };
    pan.value = {
      x: props.initialPanX,
      y: props.initialPanY,
    };
    onChange("panned", {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: delta.x,
        deltaY: delta.y,
      },
      type: eventSource,
    });
  }

  return {
    zoom: computed(() => zoom.value),
    pan: computed(() => pan.value),
    origin: computed(() => origin.value),
    setZoom: (z: number) => { zoom.value = z; },
    setPan: (p: { x: number, y: number; }) => { pan.value = p; },
    setOrigin: (o: { x: number, y: number; }) => { origin.value = o; },
    changeZoom,
    changePan,
    goHome
  };
}


function getDefaultOrigin(container: HTMLElement, target: HTMLElement) {
  const rectContainer = container.getBoundingClientRect();
  const rectTarget = target.getBoundingClientRect();
  const center = {
    x: rectContainer.left + rectContainer.width / 2,
    y: rectContainer.top + rectContainer.height / 2,
  };
  return {
    x: center.x - rectTarget.top,
    y: center.y - rectTarget.left,
  };

}

function getElementCenter(target: HTMLElement) {
  const rectTarget = target.getBoundingClientRect();
  return {
    x: rectTarget.left + rectTarget.width / 2,
    y: rectTarget.top + rectTarget.height / 2,
  };
}


// Using container and pan to estimate center because CSS transition on transform target
function estimateTargetCenter(container: HTMLElement, targetPan: { x: number, y: number; }) {
  const rectContainer = container.getBoundingClientRect();
  const center = {
    x: rectContainer.left + rectContainer.width / 2,
    y: rectContainer.top + rectContainer.height / 2,
  };
  return {
    x: center.x + targetPan.x,
    y: center.y + targetPan.y,
  };
}


function getTransformOrigin(args: {
  target: HTMLElement,
  originOld: { x: number, y: number; },
  zoomOld: number,
  originNew: { x: number, y: number; } | null,
  zoomNew: number;
}) {

  let { originNew, originOld, zoomOld, zoomNew, target } = args;

  if (originNew === null) {
    return originOld;
  }
  if (Math.abs(zoomNew - 1) < 0.001) {
    return getElementCenter(target);
  }

  const originX = ((originNew.x * (zoomNew / zoomOld - 1)) + (originOld.x * (zoomOld - 1))) / (zoomNew - 1);
  const originY = ((originNew.y * (zoomNew / zoomOld - 1)) + (originOld.y * (zoomOld - 1))) / (zoomNew - 1);

  console.log("getTransformOrigin: ", { originOld: { ...originOld }, zoomOld, originNew: { ...originNew }, zoomNew });

  return {
    x: originX,
    y: originY
  };
}
