import { Ref } from "vue";
import { useMove } from "./move";

export function useWheel(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>,
    pressedKeys: Ref<Set<String>>,
    showOverlay: Function) {

    const { changeZoom } = useMove(props, emit, pan, zoom, showOverlay);


    function onWheel(ev: WheelEvent) {
        // check if all conditions are met to scroll
        if (!props.wheelEnabled || !props.zoomEnabled) return;
        if (props.enableWheelOnKey !== undefined && !pressedKeys.value.has(props.enableWheelOnKey)) {
            showOverlay();
            return;
        }

        // normalizes the value of ev.deltaY to either be 1 or -1 and multiplies it with the double click zoom step?
        const deltaZoom = props.dblClickZoomStep * ev.deltaY / Math.abs(ev.deltaY);
        changeZoom(deltaZoom, "wheel");
    }

    return {
        onWheel,
    }
}
