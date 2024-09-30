import { ref, watch } from "vue";

export function useMove(
  props: any,
  emit: any,
) {

  let overlay = ref(true);
  let zoom = ref(props.minZoom);

  let pan = ref({
    x: props.pan != null ? props.pan.x : props.initialPanX,
    y: props.pan != null ? props.pan.y : props.initialPanY,
  });

  if (props.zoom) {
    zoom.value = props.zoom;
  }
  else if (props.initialZoom >= props.minZoom && props.initialZoom <= props.maxZoom) {
    zoom.value = props.initialZoom;
  }

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

  function changeZoom(deltaZoom: number, eventSource: string) {
    if (isNaN(deltaZoom)) return;
    overlay.value = false;

    // calculate the new zoom value including all the bounds and store the old value for later compare if an event should be sent
    const oldZoom = zoom.value;
    let newZoom = zoom.value + deltaZoom;

    if (newZoom > props.maxZoom) newZoom = props.maxZoom;
    else if (newZoom < props.minZoom) newZoom = props.minZoom;

    // check if it should sent an update, and do so

    if (oldZoom !== newZoom) {
      zoom.value = newZoom;

      let event: ZoomableEvent = {
        zoom: zoom.value,
        pan: {
          x: pan.value.x,
          y: pan.value.y,
          deltaX: 0,
          deltaY: 0,
        },
        type: eventSource
      };
      emit("zoom", event);
    }
  };

  function changePan(deltaX: number, deltaY: number, eventType: string) {
    if (isNaN(deltaX)) deltaX = 0;
    if (isNaN(deltaY)) deltaY = 0;
    overlay.value = false;

    pan.value = {
      x: pan.value.x + deltaX,
      y: pan.value.y + deltaY,
    };

    let event: ZoomableEvent = {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: deltaX,
        deltaY: deltaY
      },
      type: eventType,
    };
    emit("panned", event);
  }

  function goHome(eventSource: string) {
    overlay.value = false;

    // reset zoom
    zoom.value = props.initialZoom;
    emit("zoom", {
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
    emit("panned", {
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
    zoom,
    pan,
    changeZoom,
    changePan,
    goHome,
    overlay
  };
}
