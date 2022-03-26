import { Ref } from "vue";

export function useWheel(
    props: any,
    emit: any,
    zoom: Ref<number>) {

    function onWheel(ev: WheelEvent) {
        if (!props.wheelEnabled || !props.zoomEnabled) return;
        let newZoom = zoom.value + (props.dblClickZoomStep * ev.deltaY / Math.abs(ev.deltaY));
        if (newZoom > props.maxZoom) zoom.value = props.maxZoom;
        else if (newZoom < props.minZoom) zoom.value = props.minZoom;
        else zoom.value = newZoom;
        emit("zoom", { zoom: newZoom, type: "wheel" });
    }

    return {
        onWheel,
    }
}
