import { ref } from 'vue';
import { useMove } from "./move";
import { useHoldingEffect } from "./holdingEffect";

const controlBtnEventSource = "controll_button";


export function useZoom(
    props: any,
    emit: any
) {

    let holdEffect = useHoldingEffect();

    const { changeZoom, zoom, overlay } = useMove(props, emit);
    let keys = new Set<string>();

    document.addEventListener('keydown', (event) => {
        keys.add(event.key);
        if (event.key === props.enableWheelOnKey) overlay.value = false;
    });
    document.addEventListener('keyup', (event) => { keys.delete(event.key); });

    function onWheel(ev: WheelEvent) {
        // check if all conditions are met to scroll
        if (!props.wheelEnabled || !props.zoomEnabled) return;
        if (props.enableWheelOnKey !== undefined && !keys.has(props.enableWheelOnKey)) {
            overlay.value = true;
            return;
        }

        // normalizes the value of ev.deltaY to either be 1 or -1 and multiplies it with the double click zoom step
        const deltaZoom = props.wheelZoomStep * -1 * ev.deltaY / Math.abs(ev.deltaY);
        changeZoom(deltaZoom, "wheel");

        ev.preventDefault();
    }

    function onZoomButtonDown(direction: number) {

        holdEffect.startHold(
            () => {
                changeZoom(direction * props.buttonZoomStep * 0.5, controlBtnEventSource);
            },
            () => {
                changeZoom(direction * props.buttonZoomStep * 0.5, controlBtnEventSource);
            },
            300, 50);
    }

    function onZoomButtonUp() {
        holdEffect.clearHold();
    }

    function onDblClick() {
        if (!props.dblClickEnabled || !props.zoomEnabled) return;

        changeZoom(props.dblClickZoomStep, "dblClick");
    }

    return {
        zoom,
        onWheel,
        onZoomButtonDown,
        onZoomButtonUp,
        onDblClick,
        overlay
    };
}
