import { Ref } from "vue";


export function useMouse(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>,
    pressedKeys: Ref<Set<String>>,) {

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
        pan.value = {
            x: pan.value.x + delta.x,
            y: pan.value.y + delta.y,
        }
        dragLoc = {
            x: ev.clientX,
            y: ev.clientY,
        }
        let event: ZoomableEvent = {
            zoom: zoom.value,
            pan: {
                x: pan.value.x,
                y: pan.value.y,
                deltaX: delta.x,
                deltaY: delta.y,
            },
            type: "mouse"
        };
        emit("panned", event);
    }
    function onDblClick() {
        if (!props.dblClickEnabled || !props.zoomEnabled) return;
        let newZoom = zoom.value + props.dblClickZoomStep;
        if (newZoom == props.maxZoom) return;
        else if (newZoom > props.maxZoom) {
            zoom.value = props.maxZoom;
        }
        else {
            zoom.value = newZoom;
        }
        let event: ZoomableEvent = {
            zoom: newZoom,
            pan: {
                x: pan.value.x,
                y: pan.value.y,
                deltaX: 0,
                deltaY: 0,
            },
            type: "dblClick"
        };
        emit("zoom", event);
    }

    return {
        onMouseDown,
        onDblClick
    }
}
