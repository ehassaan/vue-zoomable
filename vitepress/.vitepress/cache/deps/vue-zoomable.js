import {
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  defineComponent,
  normalizeClass,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  withModifiers
} from "./chunk-CQOUZRMK.js";

// node_modules/.pnpm/vue-zoomable@1.2.5_vue@3.5.13/node_modules/vue-zoomable/dist/vue-zoomable.mjs
var $ = { class: "controll" };
var U = { class: "controll__item controll__item--circle" };
var Y = { class: "controll__pan controll__item--circle__inner" };
var j = { class: "controll__pan__up controll__item--circle__inner__up" };
var W = { class: "controll__pan__right controll__item--circle__inner__right" };
var X = { class: "controll__pan__down controll__item--circle__inner__down" };
var H = { class: "controll__pan__left controll__item--circle__inner__left" };
var I = { class: "controll__home controll__item controll__item--list-item" };
var O = { class: "controll__zoom-in controll__item controll__item--list-item" };
var V = { class: "controll__zoom-in controll__item controll__item--list-item" };
var K = defineComponent({
  __name: "ControlButtons",
  emits: [
    // "pandown", "panup", "zoomdown", "zoomup", "home", 
    "buttondown",
    "buttonup"
  ],
  setup(e, { emit: s }) {
    const a = s;
    function i(l, n) {
      a("buttondown", {
        key: n
      });
    }
    function o(l, n) {
      a("buttonup", {
        key: n
      });
    }
    return (l, n) => (openBlock(), createElementBlock("div", {
      id: "v-zoomable-control-btns",
      class: "controll__buttons",
      onDblclick: n[31] || (n[31] = withModifiers(() => {
      }, ["stop"])),
      onMousedown: n[32] || (n[32] = withModifiers(() => {
      }, ["stop"]))
    }, [
      createBaseVNode("ul", $, [
        createBaseVNode("li", U, [
          createBaseVNode("ul", Y, [
            createBaseVNode("li", j, [
              createBaseVNode("a", {
                onPointerdown: n[0] || (n[0] = (t) => i(t, "pan-up")),
                onPointerup: n[1] || (n[1] = (t) => o(t, "pan-up")),
                onPointercancel: n[2] || (n[2] = (t) => o(t, "pan-up")),
                onPointerleave: n[3] || (n[3] = (t) => o(t, "pan-up")),
                onContextmenu: n[4] || (n[4] = withModifiers(() => {
                }, ["prevent"]))
              }, n[33] || (n[33] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-up"
                }, [
                  createBaseVNode("polyline", { points: "18 15 12 9 6 15" })
                ], -1)
              ]), 32)
            ]),
            createBaseVNode("li", W, [
              createBaseVNode("a", {
                onPointerdown: n[5] || (n[5] = (t) => i(t, "pan-right")),
                onPointerup: n[6] || (n[6] = (t) => o(t, "pan-right")),
                onPointercancel: n[7] || (n[7] = (t) => o(t, "pan-right")),
                onPointerleave: n[8] || (n[8] = (t) => o(t, "pan-right")),
                onContextmenu: n[9] || (n[9] = withModifiers(() => {
                }, ["prevent"]))
              }, n[34] || (n[34] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-right"
                }, [
                  createBaseVNode("polyline", { points: "9 18 15 12 9 6" })
                ], -1)
              ]), 32)
            ]),
            createBaseVNode("li", X, [
              createBaseVNode("a", {
                onPointerdown: n[10] || (n[10] = (t) => i(t, "pan-down")),
                onPointerup: n[11] || (n[11] = (t) => o(t, "pan-down")),
                onPointercancel: n[12] || (n[12] = (t) => o(t, "pan-down")),
                onPointerleave: n[13] || (n[13] = (t) => o(t, "pan-down")),
                onContextmenu: n[14] || (n[14] = withModifiers(() => {
                }, ["prevent"]))
              }, n[35] || (n[35] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-down"
                }, [
                  createBaseVNode("polyline", { points: "6 9 12 15 18 9" })
                ], -1)
              ]), 32)
            ]),
            createBaseVNode("li", H, [
              createBaseVNode("a", {
                onPointerdown: n[15] || (n[15] = (t) => i(t, "pan-left")),
                onPointercancel: n[16] || (n[16] = (t) => o(t, "pan-left")),
                onPointerup: n[17] || (n[17] = (t) => o(t, "pan-left")),
                onPointerleave: n[18] || (n[18] = (t) => o(t, "pan-left")),
                onContextmenu: n[19] || (n[19] = withModifiers(() => {
                }, ["prevent"]))
              }, n[36] || (n[36] = [
                createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  class: "feather feather-chevron-left"
                }, [
                  createBaseVNode("polyline", { points: "15 18 9 12 15 6" })
                ], -1)
              ]), 32)
            ])
          ])
        ]),
        createBaseVNode("li", I, [
          createBaseVNode("a", {
            onPointerdown: n[20] || (n[20] = (t) => i(t, "home"))
          }, n[37] || (n[37] = [
            createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2" data-v-3ba139de><polyline points="4 14 10 14 10 20" data-v-3ba139de></polyline><polyline points="20 10 14 10 14 4" data-v-3ba139de></polyline><line x1="14" y1="10" x2="21" y2="3" data-v-3ba139de></line><line x1="3" y1="21" x2="10" y2="14" data-v-3ba139de></line></svg>', 1)
          ]), 32)
        ]),
        createBaseVNode("li", O, [
          createBaseVNode("a", {
            onPointerdown: n[21] || (n[21] = (t) => i(t, "zoom-in")),
            onPointerup: n[22] || (n[22] = (t) => o(t, "zoom-in")),
            onPointercancel: n[23] || (n[23] = (t) => o(t, "zoom-in")),
            onPointerleave: n[24] || (n[24] = (t) => o(t, "zoom-in")),
            onContextmenu: n[25] || (n[25] = withModifiers(() => {
            }, ["prevent"]))
          }, n[38] || (n[38] = [
            createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in" data-v-3ba139de><circle cx="11" cy="11" r="8" data-v-3ba139de></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-3ba139de></line><line x1="11" y1="8" x2="11" y2="14" data-v-3ba139de></line><line x1="8" y1="11" x2="14" y2="11" data-v-3ba139de></line></svg>', 1)
          ]), 32)
        ]),
        createBaseVNode("li", V, [
          createBaseVNode("a", {
            onPointerdown: n[26] || (n[26] = (t) => i(t, "zoom-out")),
            onPointerup: n[27] || (n[27] = (t) => o(t, "zoom-out")),
            onPointercancel: n[28] || (n[28] = (t) => o(t, "zoom-out")),
            onPointerleave: n[29] || (n[29] = (t) => o(t, "zoom-out")),
            onContextmenu: n[30] || (n[30] = withModifiers(() => {
            }, ["prevent"]))
          }, n[39] || (n[39] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "feather feather-zoom-out"
            }, [
              createBaseVNode("circle", {
                cx: "11",
                cy: "11",
                r: "8"
              }),
              createBaseVNode("line", {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
              }),
              createBaseVNode("line", {
                x1: "8",
                y1: "11",
                x2: "14",
                y2: "11"
              })
            ], -1)
          ]), 32)
        ])
      ])
    ], 32));
  }
});
var D = (e, s) => {
  const a = e.__vccOpts || e;
  for (const [i, o] of s)
    a[i] = o;
  return a;
};
var q = D(K, [["__scopeId", "data-v-3ba139de"]]);
var u = {
  pan: ref({ x: 0, y: 0 }),
  zoom: ref(0),
  origin: ref({ x: 0, y: 0 })
};
function P(e, s) {
  onMounted(() => {
    u.zoom.value = e.minZoom, u.pan.value = {
      x: e.pan != null ? e.pan.x : e.initialPanX,
      y: e.pan != null ? e.pan.y : e.initialPanY
    }, e.zoom ? u.zoom.value = e.zoom : e.initialZoom >= e.minZoom && e.initialZoom <= e.maxZoom && (u.zoom.value = e.initialZoom);
  }), watch(
    () => e.zoom,
    () => {
      isNaN(e.zoom) || (u.zoom.value = e.zoom);
    }
  ), watch(
    () => e.pan,
    () => {
      e.pan && (u.pan.value.x = e.pan.x, u.pan.value.y = e.pan.y);
    },
    { deep: true }
  );
  function a(l, n) {
    if (isNaN(l)) return;
    const t = u.zoom.value;
    let c = u.zoom.value + l;
    if (c > e.maxZoom ? c = e.maxZoom : c < e.minZoom && (c = e.minZoom), t !== c) {
      u.zoom.value = c;
      let r = {
        zoom: u.zoom.value,
        pan: {
          x: u.pan.value.x,
          y: u.pan.value.y,
          deltaX: 0,
          deltaY: 0
        },
        type: n
      };
      s("zoom", r);
    }
  }
  function i(l, n, t) {
    isNaN(l) && (l = 0), isNaN(n) && (n = 0), u.pan.value = {
      x: u.pan.value.x + l,
      y: u.pan.value.y + n
    };
    let c = {
      zoom: u.zoom.value,
      pan: {
        x: u.pan.value.x,
        y: u.pan.value.y,
        deltaX: l,
        deltaY: n
      },
      type: t
    };
    s("panned", c);
  }
  function o(l) {
    u.zoom.value = e.initialZoom, s("zoom", {
      zoom: u.zoom.value,
      pan: {
        x: u.pan.value.x,
        y: u.pan.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: l
    });
    let n = {
      x: e.initialPanX - u.pan.value.x,
      y: e.initialPanY - u.pan.value.y
    };
    u.pan.value = {
      x: e.initialPanX,
      y: e.initialPanY
    }, s("panned", {
      zoom: u.zoom.value,
      pan: {
        x: u.pan.value.x,
        y: u.pan.value.y,
        deltaX: n.x,
        deltaY: n.y
      },
      type: l
    });
  }
  return {
    zoom: computed(() => u.zoom.value),
    pan: computed(() => u.pan.value),
    setZoom: (l) => {
      u.zoom.value = l;
    },
    setPan: (l) => {
      u.pan.value = l;
    },
    changeZoom: a,
    changePan: i,
    goHome: o
  };
}
function A() {
  let e = 0;
  function s(i, o, l, n) {
    i(), e = window.setTimeout(() => {
      e = window.setInterval(() => {
        o();
      }, n);
    }, l);
  }
  function a() {
    e && (window.clearInterval(e), e = 0);
  }
  return {
    startHold: s,
    clearHold: a
  };
}
var h = "control-btn";
function F(e, s) {
  let a = A();
  const i = P(e, s);
  function o(r) {
    a.startHold(
      () => {
        i.changeZoom(r * e.buttonZoomStep * 0.5, h);
      },
      () => {
        i.changeZoom(r * e.buttonZoomStep * 0.5, h);
      },
      300,
      50
    );
  }
  function l(r) {
    if (!e.disabled)
      switch (console.log(r), r.key) {
        case "home":
          c();
          break;
        case "zoom-in":
          o(1);
          break;
        case "zoom-out":
          o(-1);
          break;
        case "pan-left":
          t({ x: 1, y: 0 });
          break;
        case "pan-right":
          t({ x: -1, y: 0 });
          break;
        case "pan-up":
          t({ x: 0, y: 1 });
          break;
        case "pan-down":
          t({ x: 0, y: -1 });
          break;
      }
  }
  function n(r) {
    a.clearHold();
  }
  function t(r) {
    a.startHold(() => {
      i.changePan(r.x * e.buttonPanStep, r.y * e.buttonPanStep, h);
    }, () => {
      i.changePan(r.x * e.buttonPanStep, r.y * e.buttonPanStep, h);
    }, 300, 50);
  }
  function c() {
    i.goHome(h);
  }
  return {
    onButtonDown: l,
    onButtonUp: n
  };
}
function G(e, s) {
  let a = P(e, s), i = {
    x: 0,
    y: 0
  };
  function o(t) {
    e.disabled || t.pointerType !== "mouse" || !e.mouseEnabled || (i = {
      x: t.clientX,
      y: t.clientY
    }, document.addEventListener("pointermove", n, { passive: false }), document.addEventListener("pointerup", function(c) {
      document.removeEventListener("pointermove", n);
    }), document.addEventListener("pointerleave", function(c) {
      document.removeEventListener("pointermove", n);
    }), document.addEventListener("pointercancel", function(c) {
      document.removeEventListener("pointermove", n);
    }));
  }
  function l() {
    e.disabled || !e.dblClickEnabled || !e.zoomEnabled || a.changeZoom(e.dblClickZoomStep, "dblClick");
  }
  function n(t) {
    if (e.disabled || !e.panEnabled || t.pointerType !== "mouse" || !e.mouseEnabled) return;
    let c = {
      x: t.clientX - i.x,
      y: t.clientY - i.y
    };
    a.changePan(c.x, c.y, t.pointerType), i = {
      x: t.clientX,
      y: t.clientY
    }, t.preventDefault();
  }
  return {
    onPointerDown: o,
    onDblClick: l
  };
}
function J(e, s) {
  let a = P(e, s), i = ref({}), o = ref(0), l = null;
  function n(r) {
    if (e.disabled || !e.touchEnabled || !e.panEnabled && !e.zoomEnabled || (r.preventDefault(), r.touches.length < 1)) return;
    console.log("TouchMove: ", r, a.pan.value);
    const f = r.touches.item(0);
    if (!f) return;
    let v = 0, y = { x: f.clientX, y: f.clientY };
    if (r.touches.length === 2) {
      const g = r.touches.item(1);
      let B = t({
        x: f ? f.clientX : 0,
        y: f ? f.clientY : 0
      }, {
        x: g ? g.clientX : 0,
        y: g ? g.clientY : 0
      });
      o.value <= 0 ? (o.value = B.distance, v = 0) : (v = B.distance / o.value * a.zoom.value - a.zoom.value, o.value = B.distance), y = B.center;
    }
    if (e.zoomEnabled && a.changeZoom(v, "touch"), console.log("TouchMovePan: ", l, y, a.pan.value), l === null) {
      l = {
        x: y.x,
        y: y.y
      };
      return;
    }
    const m = {
      x: y.x - l.x,
      y: y.y - l.y
    };
    e.panEnabled && a.changePan(m.x, m.y, "touch"), l = {
      x: y.x,
      y: y.y
    };
  }
  function t(r, f) {
    let v = Math.sqrt(Math.pow(r.x - f.x, 2) + Math.pow(r.y - f.y, 2)), y = { x: (r.x + f.x) / 2, y: (r.y + f.y) / 2 };
    return {
      distance: v,
      center: y
    };
  }
  function c(r) {
    e.disabled || !e.touchEnabled || (l = null, document.addEventListener("touchmove", n, { passive: false }), document.addEventListener("touchend", function(f) {
      r.touches.length < 2 && (o.value = -1), document.removeEventListener("touchmove", n);
    }));
  }
  return {
    onTouchStart: c,
    touchCount: computed(() => Object.keys(i.value).length)
  };
}
function Q(e, s) {
  let { changeZoom: a } = P(e, s);
  function i(o) {
    if (e.disabled || !e.wheelEnabled || !e.zoomEnabled) return;
    const l = e.wheelZoomStep * -1 * o.deltaY / Math.abs(o.deltaY);
    a(l, "wheel"), o.preventDefault();
  }
  return {
    onWheel: i
  };
}
function R(e, s) {
  const a = J(e, s), i = Q(e, s), o = G(e, s), l = F(e, s), n = P(e, s);
  return {
    zoom: n.zoom,
    pan: n.pan,
    setZoom: n.setZoom,
    setPan: n.setPan,
    onWheel: i.onWheel,
    onTouchStart: a.onTouchStart,
    onButtonUp: l.onButtonUp,
    onButtonDown: l.onButtonDown,
    onPointerDown: o.onPointerDown,
    onDblClick: o.onDblClick
  };
}
var nn = defineComponent({
  __name: "VueZoomable",
  props: {
    zoom: {
      type: Number,
      default: null
    },
    pan: {
      type: Object,
      default: null
    },
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
      default: 0.4
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
    },
    enableControlButton: {
      type: Boolean,
      default: true
    },
    buttonPanStep: {
      type: Number,
      default: 15
    },
    buttonZoomStep: {
      type: Number,
      default: 0.1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["panned", "zoom", "update:zoom", "update:pan"],
  setup(e, { emit: s }) {
    let a = s, i = e, o = ref(), l = computed(() => {
      var f;
      return (f = o.value) == null ? void 0 : f.querySelector(i.selector);
    }), n = R(i, t);
    function t(f, v) {
      f === "zoom" ? a("update:zoom", v.zoom) : f === "panned" && a("update:pan", v.pan), a(f, v);
    }
    let c = computed(() => `translate(${n.pan.value.x}px, ${n.pan.value.y}px) scale(${n.zoom.value})`);
    function r() {
      l.value && (l.value.style.transform = c.value, l.value.style.transition = "transform 0.06s ease-out", l.value.style.transformOrigin = "center center", l.value.style.transformBox = "fill-box");
    }
    return watch(
      c,
      () => {
        r();
      },
      {
        flush: "post"
      }
    ), onMounted(() => {
      r();
    }), (f, v) => (openBlock(), createElementBlock("div", {
      ref_key: "container",
      ref: o,
      class: normalizeClass(f.$style.container),
      onDblclick: v[0] || (v[0] = //@ts-ignore
      (...y) => unref(n).onDblClick && unref(n).onDblClick(...y)),
      onPointerdown: v[1] || (v[1] = //@ts-ignore
      (...y) => unref(n).onPointerDown && unref(n).onPointerDown(...y)),
      onWheel: v[2] || (v[2] = //@ts-ignore
      (...y) => unref(n).onWheel && unref(n).onWheel(...y)),
      onTouchstart: v[3] || (v[3] = //@ts-ignore
      (...y) => unref(n).onTouchStart && unref(n).onTouchStart(...y))
    }, [
      renderSlot(f.$slots, "default", {}, void 0, true),
      renderSlot(f.$slots, "buttons", {}, () => [
        unref(i).enableControlButton ? (openBlock(), createBlock(q, {
          key: 0,
          onButtondown: unref(n).onButtonDown,
          onButtonup: unref(n).onButtonUp
        }, null, 8, ["onButtondown", "onButtonup"])) : createCommentVNode("", true)
      ], true)
    ], 34));
  }
});
var en = "_container_1o4wj_2";
var tn = "_buttons_1o4wj_13";
var on = {
  container: en,
  buttons: tn
};
var ln = {
  $style: on
};
var dn = D(nn, [["__cssModules", ln], ["__scopeId", "data-v-cd5cea41"]]);
var an = { key: 0 };
var un = { key: 1 };
var rn = defineComponent({
  __name: "ScrollOverlay",
  props: {
    enableTouchLock: {
      type: Boolean,
      default: true
    },
    enableWheelLock: {
      type: Boolean,
      default: true
    },
    wheelUnlockKey: {
      type: String,
      default: "Control"
    }
  },
  setup(e) {
    const s = e, a = ref(false), i = ref(/* @__PURE__ */ new Set()), o = ref(false), l = ref();
    let n = null;
    onMounted(() => {
      var m;
      document.addEventListener("keydown", v), document.addEventListener("keyup", y), document.addEventListener("touchend", r), n = (m = l.value) == null ? void 0 : m.querySelector("#v-zoomable-control-btns");
    });
    function t(m) {
      if (i.value.has(s.wheelUnlockKey)) {
        m.preventDefault();
        return;
      }
      o.value = false, a.value = true, setTimeout(() => {
        a.value = false;
      }, 1e3), m.stopImmediatePropagation();
    }
    function c(m) {
      if (n && n.contains(m.target)) {
        m.preventDefault();
        return;
      }
      o.value = true, a.value = m.touches.length < 2, a.value || m.preventDefault();
    }
    function r(m) {
      m.touches.length > 0 || (a.value = false);
    }
    function f(m) {
      if (console.log("pointer-down: ", m), n && n.contains(m.target)) {
        m.preventDefault();
        return;
      }
      m.pointerType === "mouse" && (o.value = false);
    }
    function v(m) {
      i.value.add(m.key), i.value.has(s.wheelUnlockKey) && (a.value = false);
    }
    function y(m) {
      i.value.delete(m.key);
    }
    return (m, g) => (openBlock(), createElementBlock("div", {
      ref_key: "container",
      ref: l,
      class: "container",
      onWheelCapture: t,
      onPointerdown: f,
      onTouchstart: c
    }, [
      renderSlot(m.$slots, "default", { disableInteraction: a.value }, void 0, true),
      renderSlot(m.$slots, "overlay", { class: "" }, () => [
        createBaseVNode("div", {
          class: normalizeClass(["overlay", { hidden: !a.value }])
        }, [
          o.value ? (openBlock(), createElementBlock("p", an, "Use two fingers to pan")) : (openBlock(), createElementBlock("p", un, "Use '" + toDisplayString(s.wheelUnlockKey) + "' + 'scroll' to zoom", 1))
        ], 2)
      ], true)
    ], 544));
  }
});
var mn = D(rn, [["__scopeId", "data-v-acbebc4d"]]);
export {
  mn as ScrollOverlay,
  dn as VueZoomable,
  dn as default
};
//# sourceMappingURL=vue-zoomable.js.map
