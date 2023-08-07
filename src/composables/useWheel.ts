import { Ref } from "vue";

export function useWheel(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>,
    pressedKeys: Ref<Set<String>>,
    showOverlay: Function) {

    function onWheel(ev: WheelEvent) {
        // check if all conditions are met to scroll
        if (!props.wheelEnabled || !props.zoomEnabled) return;
        if (props.enableWheelOnKey !== undefined && !pressedKeys.value.has(props.enableWheelOnKey)) {
            showOverlay();
            return;
        }

        // calculate the new zoom value including all the bounds and store the old value for later compare if an event should be sent
        const oldZoom = zoom.value;
        let newZoom = zoom.value + (props.dblClickZoomStep * ev.deltaY / Math.abs(ev.deltaY));
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
                type: "wheel"
            };
            emit("zoom", event);
        }
    }

    return {
        onWheel,
    }
}
