import {
  computed,
  createElementBlock,
  defineComponent,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  unref,
  watch
} from "./chunk-JPCNUMVQ.js";
import "./chunk-OICIQSTT.js";
import "./chunk-FEFTYQ2P.js";

// node_modules/.pnpm/vue-zoomable@1.0.8_vue@3.2.37/node_modules/vue-zoomable/dist/vue-zoomable.es.js
function useMouse(props, emit, pan, zoom) {
  let dragLoc = {
    x: 0,
    y: 0
  };
  function onMouseDown(ev) {
    if (!props.mouseEnabled)
      return;
    dragLoc = {
      x: ev.clientX,
      y: ev.clientY
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", onMouseMove);
    });
  }
  function onMouseMove(ev) {
    if (!props.panEnabled)
      return;
    let delta = {
      x: ev.clientX - dragLoc.x,
      y: ev.clientY - dragLoc.y
    };
    pan.value = {
      x: pan.value.x + delta.x,
      y: pan.value.y + delta.y
    };
    dragLoc = {
      x: ev.clientX,
      y: ev.clientY
    };
    let event = {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: delta.x,
        deltaY: delta.y
      },
      type: "mouse"
    };
    emit("panned", event);
  }
  function onDblClick() {
    if (!props.dblClickEnabled || !props.zoomEnabled)
      return;
    let newZoom = zoom.value + props.dblClickZoomStep;
    if (newZoom == props.maxZoom)
      return;
    else if (newZoom > props.maxZoom) {
      zoom.value = props.maxZoom;
    } else {
      zoom.value = newZoom;
    }
    let event = {
      zoom: newZoom,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: "dblClick"
    };
    emit("zoom", event);
  }
  return {
    onMouseDown,
    onDblClick
  };
}
function useTouch(props, emit, pan, zoom) {
  let dragLoc = {
    x: 0,
    y: 0
  };
  function onTouchStart(ev) {
    if (!props.touchEnabled)
      return;
    let touch = ev.changedTouches.item(ev.changedTouches.length - 1);
    if (!touch)
      return;
    dragLoc = {
      x: touch.clientX,
      y: touch.clientY
    };
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", (evEnd) => {
      window.removeEventListener("touchmove", onTouchMove);
      evEnd.preventDefault();
    });
  }
  function onTouchMove(ev) {
    if (!props.panEnabled)
      return;
    let touch = ev.changedTouches.item(ev.changedTouches.length - 1);
    if (!touch)
      return;
    let delta = {
      x: touch.clientX - dragLoc.x,
      y: touch.clientY - dragLoc.y
    };
    pan.value = {
      x: pan.value.x + delta.x,
      y: pan.value.y + delta.y
    };
    dragLoc = {
      x: touch.clientX,
      y: touch.clientY
    };
    let event = {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: delta.x,
        deltaY: delta.y
      },
      type: "touch"
    };
    emit("panned", event);
    ev.preventDefault();
  }
  return {
    onTouchStart
  };
}
function useWheel(props, emit, pan, zoom) {
  function onWheel(ev) {
    if (!props.wheelEnabled || !props.zoomEnabled)
      return;
    let newZoom = zoom.value + props.dblClickZoomStep * ev.deltaY / Math.abs(ev.deltaY);
    if (newZoom > props.maxZoom)
      zoom.value = props.maxZoom;
    else if (newZoom == props.maxZoom || newZoom == props.minZoom)
      return;
    else if (newZoom < props.minZoom)
      zoom.value = props.minZoom;
    else
      zoom.value = newZoom;
    let event = {
      zoom: zoom.value,
      pan: {
        x: pan.value.x,
        y: pan.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: "wheel"
    };
    emit("zoom", event);
  }
  return {
    onWheel
  };
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _sfc_main = defineComponent({
  props: {
    selector: {
      type: String,
      default: "* > *"
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    minZoom: {
      type: Number,
      default: 0.5
    },
    initialPanX: {
      type: Number,
      default: 0
    },
    initialPanY: {
      type: Number,
      default: 0
    },
    initialZoom: {
      type: Number,
      default: 0.5
    },
    dblClickZoomStep: {
      type: Number,
      default: 0.4
    },
    wheelZoomStep: {
      type: Number,
      default: 0.05
    },
    panEnabled: {
      type: Boolean,
      default: true
    },
    zoomEnabled: {
      type: Boolean,
      default: true
    },
    mouseEnabled: {
      type: Boolean,
      default: true
    },
    touchEnabled: {
      type: Boolean,
      default: true
    },
    dblClickEnabled: {
      type: Boolean,
      default: true
    },
    wheelEnabled: {
      type: Boolean,
      default: true
    }
  },
  emits: ["panned", "zoom"],
  setup(__props, { emit }) {
    const props = __props;
    let container = ref();
    let zoom = ref(props.minZoom);
    if (props.initialZoom >= props.minZoom && props.initialZoom <= props.maxZoom) {
      zoom.value = props.initialZoom;
    }
    let pan = ref({
      x: props.initialPanX,
      y: props.initialPanY
    });
    let transform = computed(() => {
      return `translate(${pan.value.x}px, ${pan.value.y}px) scale(${zoom.value})`;
    });
    let element = null;
    function setTransform() {
      var _a;
      if (!element) {
        element = (_a = container.value) == null ? void 0 : _a.querySelector(props.selector);
      }
      if (!element)
        return;
      element.style.transform = transform.value;
    }
    watch(transform, () => {
      setTransform();
    }, {
      flush: "post"
    });
    onMounted(() => {
      setTransform();
    });
    let mouse = useMouse(props, emit, pan, zoom);
    let touch = useTouch(props, emit, pan, zoom);
    let wheel = useWheel(props, emit, pan, zoom);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: "container",
        onMousedown: _cache[0] || (_cache[0] = (...args) => unref(mouse).onMouseDown && unref(mouse).onMouseDown(...args)),
        onDblclick: _cache[1] || (_cache[1] = (...args) => unref(mouse).onDblClick && unref(mouse).onDblClick(...args)),
        onTouchstart: _cache[2] || (_cache[2] = (...args) => unref(touch).onTouchStart && unref(touch).onTouchStart(...args)),
        onWheel: _cache[3] || (_cache[3] = (...args) => unref(wheel).onWheel && unref(wheel).onWheel(...args))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 544);
    };
  }
});
var VueZoomable = _export_sfc(_sfc_main, [["__scopeId", "data-v-9412d4a4"]]);

// dep:vue-zoomable
var vue_zoomable_default = VueZoomable;
export {
  VueZoomable,
  vue_zoomable_default as default
};
//# sourceMappingURL=vue-zoomable.js.map
