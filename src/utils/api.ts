
export let nativeEmits = [
    "ready",
    "panzoomstart",
    "panzoomchange",
    "panzoomzoom",
    "panzoompan",
    "panzoomend",
    "panzoomreset"
];

export let props = {
    /**
     * Contain the panzoom element either
     * inside or outside the parent.
     * Inside: The panzoom element is smaller
     *   than its parent and cannot be panned
     *   to the outside.
     * Outside: The panzoom element is larger
     *   than its parent and cannot be panned
     *   to the inside. In other words, no
     *   empty space around the element will be shown.
     *
     * **Note**: the containment pan adjustment is not affected by the `disablePan` option.
     */
    contain: String,
    /** The cursor style to set on the panzoom element */
    cursor: String,
    /**
     * Disable panning functionality.
     * Note: disablePan does not affect focal point zooming or the contain option.
     *   The element will still pan accordingly.
     */
    disablePan: Boolean,
    /** Pan only on the Y axis */
    disableXAxis: Boolean,
    /** Pan only on the X axis */
    disableYAxis: Boolean,
    /** When passing x and y values to .pan(), treat the values as relative to their current values */
    relative: Boolean,
    /** Disable panning while the scale is equal to the starting value */
    panOnlyWhenZoomed: Boolean,
    /**
     * Round x and y values to whole numbers.
     * This can help prevent images and text from looking blurry,
     * but the higher the scale, the more it becomes
     * necessary to use fractional pixels.
     * Use your own judgment on how much to limit
     * zooming in when using this option.
     */
    roundPixels: Boolean,

    /** Disable zooming functionality */
    disableZoom: Boolean,
    /**
     * Zoom to the given point on the panzoom element.
     * This point is expected to be relative to
     * the panzoom element's dimensions and is unrelated
     * to the parent dimensions.
     */
    focal: Object,
    /** The minimum scale when zooming */
    minScale: Number,
    /** The maximum scale when zooming */
    maxScale: Number,
    /** The step affects zoom calculation when zooming with a mouse wheel, when pinch zooming, or when using zoomIn/zoomOut */
    step: Number,


    /** Whether to animate transitions */
    animate: Boolean,
    /**
     * This option treats the Panzoom element's parent
     * as a canvas. Effectively, Panzoom binds the
     * down handler to the parent instead of the Panzoom
     * element, so that pointer events anywhere on the "canvas"
     * moves its children. See issue #472.
     *
     * **Note**: setting this option to `true` also changes
     * where the `cursor` style is applied (i.e. the parent).
     */
    canvas: Boolean,
    /** Duration of the transition (ms) */
    duration: Number,
    /** CSS Easing used for transitions */
    easing: String,
    /**
     * Add elements to this array that should be excluded
     * from Panzoom handling.
     * Ancestors of event targets are also checked.
     * e.g. links and buttons that should not propagate the click event.
     */
    exclude: Array,
    /**
     * Add this class to any element within the Panzoom element
     * that you want to exclude from Panzoom handling. That
     * element's children will also be excluded.
     * e.g. links and buttons that should not propagate the click event.
     */
    excludeClass: String,
    /**
     * `force` should be used sparingly to temporarily
     * override and ignore options such as disablePan,
     * disableZoom, and panOnlyWhenZoomed.
     * This option cannot be passed to the
     * Panzoom constructor or setOptions (to avoid
     * setting this option globally).
     *
     * ```js
     * // Overrides disablePan and panOnlyWhenZoomed
     * panzoom.pan(50, 100, { force: true })
     * // Overrides disableZoom
     * panzoom.zoom(1, { force: true })
     * ```
     */
    force: Boolean,
    /**
     * On the first pointer event, when panning starts,
     * the default Panzoom behavior is to call
     * `event.preventDefault()` and `event.stopPropagation()`
     * on that event. The former is almost certainly a necessity,
     * the latter enables Panzoom elements within Panzoom elements.
     *
     * But there are some cases where the default is
     * not the desired behavior. Set this option to override that behavior.
     *
     * ```js
     * // Only call preventDefault()
     * Panzoom(elem, {
     *   handleStartEvent: (event) => {
     *     event.preventDefault()
     *   }
     * })
     * // Do nothing.
     * // This can change dragging behavior on mobile.
     * Panzoom(elem, {
     *   handleStartEvent: () => {}
     * })
     * ```
     */
    handleStartEvent: Function,
    /**
     * Skip binding the default Panzoom event listeners
     */
    noBind: Boolean,
    /**
     * **Change this at your own risk.**
     * The `transform-origin` is the origin from which transforms are applied.
     * Default: `'50% 50%'` for HTML and `'0 0'` for SVG.
     * The defaults are set because changing the `transform-origin` on
     * SVG elements doesn't work in IE.
     *
     * Changing this should work with many things, but
     * it will break focal point zooming, which assumes the
     * defaults are set to do the more complicated calculations.
     *
     * And again, changing this for SVG in IE doesn't work at all.
     */
    origin: String,
    /** The overflow CSS value for the parent. Defaults to 'hidden' */
    overflow: String,
    /**
     * Set the transform using the proper prefix.
     */
    setTransform: Function,
    /** Silence all events */
    silent: Boolean,
    /** X Value used to set the beginning transform */
    startX: Number,
    /** Y Value used to set the beginning transform */
    startY: Number,
    /** Scale used to set the beginning transform */
    startScale: Number,
    /**
     * This value is used to set touch-action on both the
     * Panzoom element and its parent.
     * It is needed because that the native scroll on mobile
     * interferes with panning and pinch zooming.
     * Set this to empty string to re-enable scrolling
     * on mobile, but note that both scrolling and panning
     * cannot work at the same time.
     */
    touchAction: String,
    /** Pass through any options like data */
    data: Object,
}
