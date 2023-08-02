import { Ref } from "vue";

export function useButtons(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>) {

    interface PanDirection {
        x: number;
        y: number;
    }

    const panDirections: { [key: string]: PanDirection } = {
        "up": { x: 0, y: -props.buttonPanStep },
        "right": { x: props.buttonPanStep, y: 0 },
        "down": { x: 0, y: props.buttonPanStep },
        "left": { x: -props.buttonPanStep, y: 0 },
    }

    const zoomDirections: { [key: string]: number } = {
        "in": props.buttonZoomStep,
        "out": -props.buttonZoomStep
    }

    let directionFromEvent = function (ev: MouseEvent): string | null {
        const target = ev.currentTarget as HTMLAnchorElement;

        if (!target) {
            console.warn("The target of the event is null, which shouldn't be the case.");
            return null;
        }

        const directionString = target.getAttribute("data-direction");
        return directionString;
    }

    function onPan(ev: MouseEvent) {
        const directionString = directionFromEvent(ev);
        if (!directionString) { return }
        if (!(directionString in panDirections)) {
            console.error("The direction " + directionString + " doesn't exist, and this really should not happen.");
            return;
        }

        const direction = panDirections[directionString];

        pan.value = {
            x: pan.value.x + direction.x,
            y: pan.value.y + direction.y,
        }

        let event: ZoomableEvent = {
            zoom: zoom.value,
            pan: {
                x: pan.value.x,
                y: pan.value.y,
                deltaX: direction.x,
                deltaY: direction.y
            },
            type: "controll_button",
        }
        emit("panned", event);
    }

    function onZoom(ev: MouseEvent) {
        const directionString = directionFromEvent(ev);
        if (!directionString) { return }
        if (!(directionString in zoomDirections)) {
            console.error("The direction " + directionString + " doesn't exist, and this really should not happen.")
            return;
        }

        const direction = zoomDirections[directionString];

        zoom.value = zoom.value + direction;

        let event: ZoomableEvent = {
            zoom: zoom.value,
            pan: {
                x: pan.value.x,
                y: pan.value.y,
                deltaX: 0,
                deltaY: 0,
            },
            type: "controll_button",
        }
        emit("zoom", event);
    }

    function onHome() {
        zoom.value = props.initialZoom;
        pan.value = {
            x: props.initialPanX,
            y: props.initialPanY,
        }
    }

    return {
        onPan,
        onZoom,
        onHome,
    }
}
