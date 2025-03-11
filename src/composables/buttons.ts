import { useTransform } from "./transform";
import { useHoldingEffect } from "./holdingEffect";

const controlBtnEventSource = "control-btn";

export interface ButtonEvent {
    key: "home" | "pan-left" | "pan-right" | "pan-up" | "pan-down" | "zoom-in" | "zoom-out";
}

export function useButtons({
    props,
    transform,
}: { props: any, transform: ReturnType<typeof useTransform>; }) {

    let holdEffect = useHoldingEffect();

    function zoomButtonDown(direction: number) {

        holdEffect.startHold(
            () => {
                transform.changeZoom(direction * props.buttonZoomStep * 0.5, controlBtnEventSource);
            },
            () => {
                transform.changeZoom(direction * props.buttonZoomStep * 0.5, controlBtnEventSource);
            },
            300, 50);
    }

    function onButtonDown(button: ButtonEvent) {
        if (props.disabled) return;

        switch (button.key) {
            case "home":
                goHome();
                break;
            case "zoom-in":
                zoomButtonDown(1);
                break;
            case "zoom-out":
                zoomButtonDown(-1);
                break;
            case "pan-left":
                panButtonDown({ x: 1, y: 0 });
                break;
            case "pan-right":
                panButtonDown({ x: -1, y: 0 });
                break;
            case 'pan-up':
                panButtonDown({ x: 0, y: 1 });
                break;
            case 'pan-down':
                panButtonDown({ x: 0, y: -1 });
                break;
            default:
                break;
        }
    }

    function onButtonUp(button: ButtonEvent) {
        holdEffect.clearHold();
    }

    function panButtonDown(dir: { x: number, y: number; }) {

        holdEffect.startHold(() => {
            transform.changePan(dir.x * props.buttonPanStep, dir.y * props.buttonPanStep, controlBtnEventSource);
        }, () => {
            transform.changePan(dir.x * props.buttonPanStep, dir.y * props.buttonPanStep, controlBtnEventSource);
        }, 300, 50);
    }

    function goHome() {
        transform.goHome(controlBtnEventSource);
    }

    return {
        onButtonDown,
        onButtonUp,
    };
}
