

export let props = {
    zoomEnabled: { type: Boolean, default: true },
    controlIconsEnabled: { type: Boolean, default: false },
    fit: { type: Boolean, default: true },
    panEnabled: { type: Boolean, default: true },
    dblClickZoomEnabled: { type: Boolean, default: true },
    mouseWheelZoomEnabled: { type: Boolean, default: true },
    preventMouseEventsDefault: { type: Boolean, default: true },
    contain: { type: Boolean, default: false },
    center: { type: Boolean, default: true },
    viewportSelector: { type: String, default: null }, // randomly generated and applied to svg in slot.
    zoomScaleSensitivity: { type: Number, default: 0.2 },
    minZoom: { type: Number, default: 0.5 },
    maxZoom: { type: Number, default: 10 },
    refreshRate: { default: "auto" },
    customEventsHandler: {
        type: Object,
        default: () => { }
    },
    eventsListenerElement: {
        default: 'self'
    },
};

export let nativeEmits = [
    "beforeZoom",
    "onZoom",
    "beforePan",
    "onPan",
    "onUpdatedCTM",
    // "svgpanzoom",
    "onThumbnailShown"
];

export let observableProps: { [k: string]: any } = {
    zoomEnabled: (val: boolean, spz: any) => val ? spz.enableZoom() : spz.disableZoom(),
    panEnabled: (val: boolean, spz: any) => val ? spz.enablePan() : spz.disablePan(),
    dblClickZoomEnabled: (val: boolean, spz: any) => val ? spz.enableDblClickZoom() : spz.disableDblClickZoom(),
    mouseWheelZoomEnabled: (val: boolean, spz: any) => val ? spz.enableMouseWheelZoom() : spz.disableMouseWheelZoom(),
    controlIconsEnabled: (val: boolean, spz: any) => val ? spz.enableControlIcons() : spz.disableControlIcons(),
}
