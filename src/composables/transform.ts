import { computed, onMounted, ref, watch } from "vue";

export const state = {
  pan: ref({ x: 0, y: 0 }),
  zoom: ref(0),
  origin: ref({ x: 0, y: 0 })
};

export function useTransform(
  props: any,
  emit: any,
) {

  onMounted(() => {
    state.zoom.value = props.minZoom;

    state.pan.value = {
      x: props.pan != null ? props.pan.x : props.initialPanX,
      y: props.pan != null ? props.pan.y : props.initialPanY,
    };

    if (props.zoom) {
      state.zoom.value = props.zoom;
    }
    else if (props.initialZoom >= props.minZoom && props.initialZoom <= props.maxZoom) {
      state.zoom.value = props.initialZoom;
    }
  });

  watch(
    () => props.zoom,
    () => {
      if (!isNaN(props.zoom)) {
        state.zoom.value = props.zoom;
      }
    }
  );

  watch(
    () => props.pan,
    () => {
      if (props.pan) {
        state.pan.value.x = props.pan.x;
        state.pan.value.y = props.pan.y;
      }
    }, { deep: true });

  function changeZoom(deltaZoom: number, eventSource: string) {
    if (isNaN(deltaZoom)) return;

    // calculate the new zoom value including all the bounds and store the old value for later compare if an event should be sent
    const oldZoom = state.zoom.value;
    let newZoom = state.zoom.value + deltaZoom;

    if (newZoom > props.maxZoom) newZoom = props.maxZoom;
    else if (newZoom < props.minZoom) newZoom = props.minZoom;

    // check if it should sent an update, and do so

    if (oldZoom !== newZoom) {
      state.zoom.value = newZoom;

      let event: ZoomableEvent = {
        zoom: state.zoom.value,
        pan: {
          x: state.pan.value.x,
          y: state.pan.value.y,
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

    state.pan.value = {
      x: state.pan.value.x + deltaX,
      y: state.pan.value.y + deltaY,
    };

    let event: ZoomableEvent = {
      zoom: state.zoom.value,
      pan: {
        x: state.pan.value.x,
        y: state.pan.value.y,
        deltaX: deltaX,
        deltaY: deltaY
      },
      type: eventType,
    };
    emit("panned", event);
  }

  function goHome(eventSource: string) {

    // reset zoom
    state.zoom.value = props.initialZoom;
    emit("zoom", {
      zoom: state.zoom.value,
      pan: {
        x: state.pan.value.x,
        y: state.pan.value.y,
        deltaX: 0,
        deltaY: 0,
      },
      type: eventSource,
    });

    // reset pan
    let delta = {
      x: props.initialPanX - state.pan.value.x,
      y: props.initialPanY - state.pan.value.y,
    };
    state.pan.value = {
      x: props.initialPanX,
      y: props.initialPanY,
    };
    emit("panned", {
      zoom: state.zoom.value,
      pan: {
        x: state.pan.value.x,
        y: state.pan.value.y,
        deltaX: delta.x,
        deltaY: delta.y,
      },
      type: eventSource,
    });
  }

  return {
    zoom: computed(() => state.zoom.value),
    pan: computed(() => state.pan.value),
    setZoom: (zoom: number) => { state.zoom.value = zoom; },
    setPan: (pan: { x: number, y: number; }) => { state.pan.value = pan; },
    changeZoom,
    changePan,
    goHome
  };
}
