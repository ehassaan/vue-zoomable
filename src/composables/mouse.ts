import { useTransform } from './transform';

export function useMouse(
    props: any,
    emit: any
) {

    let transform = useTransform(props, emit);

    let lastPosition = {
        x: 0,
        y: 0,
    };

    function onPointerDown(ev: PointerEvent) {
        if (props.disabled) return;
        if (ev.pointerType !== "mouse" || !props.mouseEnabled) return;

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

    function onDblClick() {
        if (props.disabled) return;
        if (!props.dblClickEnabled || !props.zoomEnabled) return;

        transform.changeZoom(props.dblClickZoomStep, "dblClick");
    }

    function onPointerMove(ev: PointerEvent) {
        if (props.disabled) return;
        if (!props.panEnabled) return;
        if (ev.pointerType !== "mouse" || !props.mouseEnabled) return;

        let delta = {
            x: ev.clientX - lastPosition.x,
            y: ev.clientY - lastPosition.y,
        };

        transform.changePan(delta.x, delta.y, ev.pointerType);

        lastPosition = {
            x: ev.clientX,
            y: ev.clientY,
        };

        ev.preventDefault();
    }

    return {
        onPointerDown,
        onDblClick,
    };
}