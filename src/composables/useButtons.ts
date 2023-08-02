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

    function onPan(ev: MouseEvent) {
        const target = ev.currentTarget as HTMLAnchorElement;

        if (!target) {
            console.warn("The target of the event is null, which shouldn't be the case.");
            return;
        }

        const directionString = target.getAttribute("data-direction");

        if (directionString && !(directionString in panDirections)) {
            console.error("The direction " + directionString + " doesn't exist, and this really should not happen.")
            return;
        }

        if (!directionString) { return }
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

    }

    function onHome() {

    }

    return {
        onPan,
        onZoom,
        onHome,
    }
}
