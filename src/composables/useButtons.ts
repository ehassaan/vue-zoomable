import { Ref } from "vue";
import { useMove } from "./move";

export function useButtons(
    props: any,
    emit: any,
    pan: Ref<{ x: number, y: number }>,
    zoom: Ref<number>) {

    const { changeZoom, changePan, goHome } = useMove(props, emit, pan, zoom);

    const eventType: string = "controll_button";

    interface PanDirection {
        x: number;
        y: number;
    }

    const panDirections: { [key: string]: PanDirection } = {
        "up": { x: 0, y: props.buttonPanStep },
        "right": { x: -props.buttonPanStep, y: 0 },
        "down": { x: 0, y: -props.buttonPanStep },
        "left": { x: props.buttonPanStep, y: 0 },
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

        changePan(direction.x, direction.y, eventType);
    }

    function onZoom(ev: MouseEvent) {
        const directionString = directionFromEvent(ev);
        if (!directionString) { return }
        if (!(directionString in zoomDirections)) {
            console.error("The direction " + directionString + " doesn't exist, and this really should not happen.")
            return;
        }

        const direction = zoomDirections[directionString];
        changeZoom(direction, eventType);
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
