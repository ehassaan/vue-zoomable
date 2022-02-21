import svg_pan_zoom from "svg-pan-zoom";
import { props as allProps } from "./api";

export default (props: any, emit: any, root: any, events: string[]) => {
    let options: any = {};
    Object.keys(allProps)
        .filter((k) => props[k] != undefined)
        .forEach((k) => (options[k] = props[k]));
    for (let ev of events) {
        options[ev] = (...eventArgs: any) => {
            let args: any = { eventArgs };
            args.preventDefault = () => args.prevent = true;
            emit(ev, args);
            return args.prevent !== true;
        }
    }
    let spz = svg_pan_zoom(root, options);
    emit("svgpanzoom", { spz, options });

    let expose = {
        zoom: (zoom: number) => spz.zoom(zoom),
        zoomIn: () => spz.zoomIn(),
        zoomOut: () => spz.zoomOut(),
        resetZoom: () => spz.resetZoom(),
        zoomAtPoint: (zoom: number, position: { x: number, y: number }) => spz.zoomAtPoint(zoom, position),
    };
    return { expose, spz };
}
