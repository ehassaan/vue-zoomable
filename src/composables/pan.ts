import { useHoldingEffect } from './holdingEffect';
import { useMove } from './move';

const controlBtnEventSource = "controll_button";

export function usePan(
    props: any,
    emit: any
) {

    let move = useMove(props, emit);
    let holdEffect = useHoldingEffect();

    let lastPosition = {
        x: 0,
        y: 0,
    };

    function onPointerDown(ev: PointerEvent) {
        if (ev.pointerType === "touch") {
            move.overlay.value = false;
        }
        if (ev.pointerType === "touch" && !props.touchEnabled) return;
        if (ev.pointerType === "mouse" && !props.mouseEnabled) return;

        lastPosition = {
            x: ev.clientX,
            y: ev.clientY
        };
        document.addEventListener("pointermove", onPointerMove, { passive: false });

        document.addEventListener("pointerup", function (evEnd: PointerEvent) {
            document.removeEventListener("pointermove", onPointerMove);
        });
        document.addEventListener("pointerleave", function (evEnd: PointerEvent) {
            document.removeEventListener("pointermove", onPointerMove);
        });
        document.addEventListener("pointercancel", function (evEnd: PointerEvent) {
            document.removeEventListener("pointermove", onPointerMove);
        });
    }

    function onPointerMove(ev: PointerEvent) {
        if (!props.panEnabled) return;

        let delta = {
            x: ev.clientX - lastPosition.x,
            y: ev.clientY - lastPosition.y,
        };

        move.changePan(delta.x, delta.y, ev.pointerType);

        lastPosition = {
            x: ev.clientX,
            y: ev.clientY,
        };

        ev.preventDefault();
    }

    function onPanButtonDown(button: "left" | "right" | "up" | "down") {
        let dir = { x: 0, y: 0 };

        switch (button) {
            case "left":
                dir.x = 1;
                break;
            case "right":
                dir.x = -1;
                break;
            case 'up':
                dir.y = 1;
                break;
            case 'down':
                dir.y = -1;
                break;
            default:
                break;
        }

        holdEffect.startHold(() => {
            move.changePan(dir.x * props.buttonPanStep, dir.y * props.buttonPanStep, controlBtnEventSource);
        }, () => {
            move.changePan(dir.x * props.buttonPanStep, dir.y * props.buttonPanStep, controlBtnEventSource);
        }, 300, 50);

    }

    function onPanButtonUp() {
        holdEffect.clearHold();
    }

    function onHome() {
        // what a totally necesarry function *rolls eyes*
        move.goHome(controlBtnEventSource);
    }

    return {
        onPointerDown,
        onPanButtonDown,
        onPanButtonUp,
        onHome,
        pan: move.pan,
        overlay: move.overlay
    };
}