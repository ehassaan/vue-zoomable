import { Ref } from "vue";
import { useMove } from "./move";


export function useMouse(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>,
) {

    const { changeZoom, changePan } = useMove(props, emit, pan, zoom);
    const eventType = "mouse";

    let dragLoc = {
        x: 0,
        y: 0,
    }
    function onMouseDown(ev: MouseEvent) {
        if (!props.mouseEnabled) return;
        dragLoc = {
            x: ev.clientX,
            y: ev.clientY
        }
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", onMouseMove);
        });
    }

    function onMouseMove(ev: MouseEvent) {
        if (!props.panEnabled) return;
        let delta = {
            x: ev.clientX - dragLoc.x,
            y: ev.clientY - dragLoc.y,
        }

        changePan(delta.x, delta.y, eventType);

        // Idfk what this does but it has to be here, don't ask me
        dragLoc = {
            x: ev.clientX,
            y: ev.clientY,
        }
    }

    function onDblClick() {
        if (!props.dblClickEnabled || !props.zoomEnabled) return;

        changeZoom(props.dblClickZoomStep, "dblClick");
    }

    return {
        onMouseDown,
        onDblClick
    }
}
