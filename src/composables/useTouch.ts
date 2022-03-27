import { Ref } from "vue";


export function useTouch(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>) {

    let dragLoc = {
        x: 0,
        y: 0,
    }
    function onTouchStart(ev: TouchEvent) {
        if (!props.touchEnabled) return;
        let touch = ev.changedTouches.item(ev.changedTouches.length - 1);
        if (!touch) return;
        dragLoc = {
            x: touch.clientX,
            y: touch.clientY
        }
        window.addEventListener("touchmove", onTouchMove, { passive: false });
        window.addEventListener("touchend", (evEnd: TouchEvent) => {
            window.removeEventListener("touchmove", onTouchMove);
            evEnd.preventDefault();
        });
    }

    function onTouchMove(ev: TouchEvent) {
        if (!props.panEnabled) return;

        let touch = ev.changedTouches.item(ev.changedTouches.length - 1);
        if (!touch) return;
        let delta = {
            x: touch.clientX - dragLoc.x,
            y: touch.clientY - dragLoc.y,
        }
        pan.value = {
            x: pan.value.x + delta.x,
            y: pan.value.y + delta.y,
        }
        dragLoc = {
            x: touch.clientX,
            y: touch.clientY,
        }
        let event: ZoomableEvent = {
            zoom: zoom.value,
            pan: {
                x: pan.value.x,
                y: pan.value.y,
                deltaX: delta.x,
                deltaY: delta.y,
            },
            type: "touch"
        };
        emit("panned", event);
        ev.preventDefault();
    }

    return {
        onTouchStart,
    }
}