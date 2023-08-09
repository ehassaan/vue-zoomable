import { Ref } from "vue";
import { useMove } from "./move";

export function useButtons(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>,
    setOverlay: Function) {

    const { changeZoom, changePan, goHome } = useMove(props, emit, pan, zoom, setOverlay);

    const eventType: string = "controll_button";

    interface PanDirection {
        x: number;
        y: number;
    }

    let isHolding = false;

    function holding(callback: Function, delay: number) {
        if (!isHolding) return;

        callback();
        setTimeout(() => { holding(callback, delay) }, delay)
    }

    function onPan(direction: PanDirection, usingHold: boolean = false) {
        changePan(direction.x * props.buttonPanStep, direction.y * props.buttonPanStep, eventType);

        isHolding = usingHold;
        if (isHolding) {
            setTimeout(() => {
                holding(() => {
                    changePan(direction.x * props.buttonPanStep * 0.5, direction.y * props.buttonPanStep * 0.5, eventType);
                }, 50)
            }, 300);
        }
    }

    function onZoom(direction: number, usingHold: boolean = false) {
        changeZoom(direction * props.buttonZoomStep, eventType);

        isHolding = usingHold;
        if (isHolding) {
            setTimeout(() => {
                holding(() => {
                    changeZoom(direction * props.buttonZoomStep * 0.5, eventType);
                }, 50)
            }, 300);
        }
    }

    function onHome() {
        // what a totally necesarry function *rolls eyes*
        goHome(eventType);
    }

    return {
        onPan,
        onZoom,
        onHome,
    }
}
