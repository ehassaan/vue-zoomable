import svg_pan_zoom from "svg-pan-zoom";
import panzoom from "@panzoom/panzoom";
import { props as allProps } from "./api";
import { PanzoomOptions } from "./types";

export function getOptions(props: any) {
    let options: any = {};
    Object.keys(allProps)
        .filter((k) => props[k] != undefined)
        .forEach((k) => (options[k] = props[k]));
    return options;
}

export default (props: PanzoomOptions, emit: any, root: any, events: string[]) => {

    let options = getOptions(props);
    let pz = panzoom(root, options);
    for (let ev of events) {
        root.addEventListener(ev, (args: any) => {
            emit(ev, args);
        });
    }
    emit("ready", { pz, options });

    return pz;
}
