import svg_pan_zoom from "svg-pan-zoom";
import { props as allProps } from "./api";

export default (props: any, emit: any, root: any, events: string[]) => {
    console.log(root);
    let options: any = {};
    Object.keys(allProps)
        .filter((k) => props[k] !== undefined)
        .forEach((k) => (options[k] = props[k]));
    for (let ev in events) {
        options[ev] = (...args: any) => {
            emit(ev, args);
        }
    }
    let spz = svg_pan_zoom(root, options);
    emit("svgpanzoom", spz);

    let expose = {
        zoom: (zoom: number) => spz.zoom(zoom),
        zoomIn: () => spz.zoomIn(),
        zoomOut: () => spz.zoomOut(),
        resetZoom: () => spz.resetZoom(),
        zoomAtPoint: (zoom: number, position: { x: number, y: number }) => spz.zoomAtPoint(zoom, position),
    };
    return expose;
}
