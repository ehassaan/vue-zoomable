import { Ref } from "vue";


export function useMouse(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>) {

    let dragLoc = {
        x: 0,
        y: 0,
    }
    function onMouseDown(ev: MouseEvent) {
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
        let delta = {
            x: ev.clientX - dragLoc.x,
            y: ev.clientY - dragLoc.y,
        }
        pan.value = {
            x: pan.value.x + delta.x,
            y: pan.value.y + delta.y,
        }
        dragLoc = {
            x: ev.clientX,
            y: ev.clientY,
        }
        emit("panned", { ...delta, type: "mouse" });
    }
    function onDblClick() {
        let newZoom = zoom.value + props.dblClickZoomStep;
        if (newZoom > props.maxZoom) zoom.value = props.maxZoom;
        if (newZoom == props.maxZoom) return;
        else zoom.value = newZoom;
        emit("zoom", { zoom: newZoom, type: "mouse" });
    }

    return {
        onMouseDown,
        onMouseMove,
        onDblClick
    }
}