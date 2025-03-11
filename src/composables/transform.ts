import { computed, onMounted, Ref, ref, watch } from "vue";
import type { ZoomableEvent } from "../entities/ZoomableEvent";


export function useTransform({
  props,
  onChange,
  container,
  target,
}: { props: any; onChange: any; container: Ref<HTMLElement>; target: Ref<HTMLElement>; }) {

  const pan = ref({ x: 0, y: 0 });
  const zoom = ref(0);

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

    if (props.zoomOrigin === 'center') {
      zoomOrigin = getElementCenter(container.value);
    }
    if (props.zoomOrigin !== 'content-center') {
      if (!zoomOrigin) zoomOrigin = getElementCenter(container.value);

      const center = estimateTargetCenter(container.value, pan.value);

      const deltaPan = {
        x: (newZoom - oldZoom) * ((center.x - zoomOrigin.x) / oldZoom),
        y: (newZoom - oldZoom) * ((center.y - zoomOrigin.y) / oldZoom),
      };
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
    setZoom: (z: number) => { zoom.value = z; },
    setPan: (p: { x: number, y: number; }) => { pan.value = p; },
    changeZoom,
    changePan,
    goHome
  };
}


function getElementCenter(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const center = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
  return center;
}


// Using container and pan to estimate center because CSS transition on transform target
function estimateTargetCenter(container: HTMLElement, targetPan: { x: number, y: number; }) {
  const center = getElementCenter(container);
  return {
    x: center.x + targetPan.x,
    y: center.y + targetPan.y,
  };
}
