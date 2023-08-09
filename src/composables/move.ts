import { Ref } from "vue";

export function useMove(
  props: any,
  emit: any,
  pan: Ref<{ x: number, y: number }>,
  zoom: Ref<number>,
  setOverlay: Function
) {
  function changeZoom(deltaZoom: number, eventType: string) {
    if (isNaN(deltaZoom)) return;
    setOverlay(true);

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
        type: eventType
      };
      emit("zoom", event);
    }
  }

  function changePan(deltaX: number, deltaY: number, eventType: string) {
    if (isNaN(deltaX)) deltaX = 0;
    if (isNaN(deltaY)) deltaY = 0;
    setOverlay(true);

    pan.value = {
      x: pan.value.x + deltaX,
      y: pan.value.y + deltaY,
    }

    let event: ZoomableEvent = {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: deltaX,
        deltaY: deltaY
      },
      type: eventType,
    }
    emit("panned", event);
  }

  function goHome(eventType: string) {
    setOverlay(true);

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
      type: eventType,
    })

    // reset pan
    let delta = {
      x: props.initialPanX - pan.value.x,
      y: props.initialPanY - pan.value.y,
    }
    pan.value = {
      x: props.initialPanX,
      y: props.initialPanY,
    }
    emit("panned", {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: delta.x,
        deltaY: delta.y,
      },
      type: eventType,
    })
  }

  return {
    changeZoom,
    changePan,
    goHome
  }
}
