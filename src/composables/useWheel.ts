import { Ref } from "vue";

export function useWheel(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>,
    pressedKeys: Ref<Set<String>>,
    showOverlay: Function) {

    function onWheel(ev: WheelEvent) {
        if (!props.wheelEnabled || !props.zoomEnabled) return;
        let newZoom = zoom.value + (props.dblClickZoomStep * ev.deltaY / Math.abs(ev.deltaY));
        if (props.enableWheelOnKey !== undefined && !pressedKeys.value.has(props.enableWheelOnKey)) {
            showOverlay();
            return;
        }

        // it would zoom, if the "zoom bounds" aren't exeded
        if (newZoom > props.maxZoom) zoom.value = props.maxZoom;
        else if (newZoom == props.maxZoom || newZoom == props.minZoom) return;
        else if (newZoom < props.minZoom) zoom.value = props.minZoom;
        else zoom.value = newZoom;

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

    return {
        onWheel,
    }
}
