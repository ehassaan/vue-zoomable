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
  unref,
  watch,
  withModifiers
} from "./chunk-Q56VL3NH.js";

// node_modules/.pnpm/vue-zoomable@1.2.0_vue@3.5.11/node_modules/vue-zoomable/dist/vue-zoomable.mjs
var Y = { class: "controll" };
var L = { class: "controll__item controll__item--circle" };
var X = { class: "controll__pan controll__item--circle__inner" };
var j = { class: "controll__pan__up controll__item--circle__inner__up" };
var H = { class: "controll__pan__right controll__item--circle__inner__right" };
var $ = { class: "controll__pan__down controll__item--circle__inner__down" };
var W = { class: "controll__pan__left controll__item--circle__inner__left" };
var U = { class: "controll__home controll__item controll__item--list-item" };
var V = { class: "controll__zoom-in controll__item controll__item--list-item" };
var I = { class: "controll__zoom-in controll__item controll__item--list-item" };
var O = defineComponent({
  __name: "ControlButtons",
  emits: [
    // "pandown", "panup", "zoomdown", "zoomup", "home", 
    "buttondown",
    "buttonup"
  ],
  setup(o, { emit: d }) {
    const u = d;
    function i(l, n) {
      u("buttondown", {
        key: n
      });
    }
    function e(l, n) {
      u("buttonup", {
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
      createBaseVNode("ul", Y, [
        createBaseVNode("li", L, [
          createBaseVNode("ul", X, [
            createBaseVNode("li", j, [
              createBaseVNode("a", {
                onPointerdown: n[0] || (n[0] = (t) => i(t, "pan-up")),
                onPointerup: n[1] || (n[1] = (t) => e(t, "pan-up")),
                onPointercancel: n[2] || (n[2] = (t) => e(t, "pan-up")),
                onPointerleave: n[3] || (n[3] = (t) => e(t, "pan-up")),
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
            createBaseVNode("li", H, [
              createBaseVNode("a", {
                onPointerdown: n[5] || (n[5] = (t) => i(t, "pan-right")),
                onPointerup: n[6] || (n[6] = (t) => e(t, "pan-right")),
                onPointercancel: n[7] || (n[7] = (t) => e(t, "pan-right")),
                onPointerleave: n[8] || (n[8] = (t) => e(t, "pan-right")),
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
            createBaseVNode("li", $, [
              createBaseVNode("a", {
                onPointerdown: n[10] || (n[10] = (t) => i(t, "pan-down")),
                onPointerup: n[11] || (n[11] = (t) => e(t, "pan-down")),
                onPointercancel: n[12] || (n[12] = (t) => e(t, "pan-down")),
                onPointerleave: n[13] || (n[13] = (t) => e(t, "pan-down")),
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
            createBaseVNode("li", W, [
              createBaseVNode("a", {
                onPointerdown: n[15] || (n[15] = (t) => i(t, "pan-left")),
                onPointercancel: n[16] || (n[16] = (t) => e(t, "pan-left")),
                onPointerup: n[17] || (n[17] = (t) => e(t, "pan-left")),
                onPointerleave: n[18] || (n[18] = (t) => e(t, "pan-left")),
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
        createBaseVNode("li", U, [
          createBaseVNode("a", {
            onPointerdown: n[20] || (n[20] = (t) => i(t, "home"))
          }, n[37] || (n[37] = [
            createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2" data-v-3ba139de><polyline points="4 14 10 14 10 20" data-v-3ba139de></polyline><polyline points="20 10 14 10 14 4" data-v-3ba139de></polyline><line x1="14" y1="10" x2="21" y2="3" data-v-3ba139de></line><line x1="3" y1="21" x2="10" y2="14" data-v-3ba139de></line></svg>', 1)
          ]), 32)
        ]),
        createBaseVNode("li", V, [
          createBaseVNode("a", {
            onPointerdown: n[21] || (n[21] = (t) => i(t, "zoom-in")),
            onPointerup: n[22] || (n[22] = (t) => e(t, "zoom-in")),
            onPointercancel: n[23] || (n[23] = (t) => e(t, "zoom-in")),
            onPointerleave: n[24] || (n[24] = (t) => e(t, "zoom-in")),
            onContextmenu: n[25] || (n[25] = withModifiers(() => {
            }, ["prevent"]))
          }, n[38] || (n[38] = [
            createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in" data-v-3ba139de><circle cx="11" cy="11" r="8" data-v-3ba139de></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-3ba139de></line><line x1="11" y1="8" x2="11" y2="14" data-v-3ba139de></line><line x1="8" y1="11" x2="14" y2="11" data-v-3ba139de></line></svg>', 1)
          ]), 32)
        ]),
        createBaseVNode("li", I, [
          createBaseVNode("a", {
            onPointerdown: n[26] || (n[26] = (t) => i(t, "zoom-out")),
            onPointerup: n[27] || (n[27] = (t) => e(t, "zoom-out")),
            onPointercancel: n[28] || (n[28] = (t) => e(t, "zoom-out")),
            onPointerleave: n[29] || (n[29] = (t) => e(t, "zoom-out")),
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
var N = (o, d) => {
  const u = o.__vccOpts || o;
  for (const [i, e] of d)
    u[i] = e;
  return u;
};
var q = N(O, [["__scopeId", "data-v-3ba139de"]]);
var a = {
  pan: ref({ x: 0, y: 0 }),
  zoom: ref(0),
  origin: ref({ x: 0, y: 0 })
};
function g(o, d) {
  onMounted(() => {
    a.zoom.value = o.minZoom, a.pan.value = {
      x: o.pan != null ? o.pan.x : o.initialPanX,
      y: o.pan != null ? o.pan.y : o.initialPanY
    }, o.zoom ? a.zoom.value = o.zoom : o.initialZoom >= o.minZoom && o.initialZoom <= o.maxZoom && (a.zoom.value = o.initialZoom);
  }), watch(
    () => o.zoom,
    () => {
      isNaN(o.zoom) || (a.zoom.value = o.zoom);
    }
  ), watch(
    () => o.pan,
    () => {
      o.pan && (a.pan.value.x = o.pan.x, a.pan.value.y = o.pan.y);
    },
    { deep: true }
  );
  function u(l, n) {
    if (isNaN(l)) return;
    const t = a.zoom.value;
    let f = a.zoom.value + l;
    if (f > o.maxZoom ? f = o.maxZoom : f < o.minZoom && (f = o.minZoom), t !== f) {
      a.zoom.value = f;
      let r = {
        zoom: a.zoom.value,
        pan: {
          x: a.pan.value.x,
          y: a.pan.value.y,
          deltaX: 0,
          deltaY: 0
        },
        type: n
      };
      d("zoom", r);
    }
  }
  function i(l, n, t) {
    isNaN(l) && (l = 0), isNaN(n) && (n = 0), a.pan.value = {
      x: a.pan.value.x + l,
      y: a.pan.value.y + n
    };
    let f = {
      zoom: a.zoom.value,
      pan: {
        x: a.pan.value.x,
        y: a.pan.value.y,
        deltaX: l,
        deltaY: n
      },
      type: t
    };
    d("panned", f);
  }
  function e(l) {
    a.zoom.value = o.initialZoom, d("zoom", {
      zoom: a.zoom.value,
      pan: {
        x: a.pan.value.x,
        y: a.pan.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: l
    });
    let n = {
      x: o.initialPanX - a.pan.value.x,
      y: o.initialPanY - a.pan.value.y
    };
    a.pan.value = {
      x: o.initialPanX,
      y: o.initialPanY
    }, d("panned", {
      zoom: a.zoom.value,
      pan: {
        x: a.pan.value.x,
        y: a.pan.value.y,
        deltaX: n.x,
        deltaY: n.y
      },
      type: l
    });
  }
  return {
    zoom: computed(() => a.zoom.value),
    pan: computed(() => a.pan.value),
    setZoom: (l) => {
      a.zoom.value = l;
    },
    setPan: (l) => {
      a.pan.value = l;
    },
    changeZoom: u,
    changePan: i,
    goHome: e
  };
}
function A() {
  let o = 0;
  function d(i, e, l, n) {
    i(), o = window.setTimeout(() => {
      o = window.setInterval(() => {
        e();
      }, n);
    }, l);
  }
  function u() {
    o && (window.clearInterval(o), o = 0);
  }
  return {
    startHold: d,
    clearHold: u
  };
}
var p = "control-btn";
function F(o, d) {
  let u = A();
  const i = g(o, d);
  function e(r) {
    u.startHold(
      () => {
        i.changeZoom(r * o.buttonZoomStep * 0.5, p);
      },
      () => {
        i.changeZoom(r * o.buttonZoomStep * 0.5, p);
      },
      300,
      50
    );
  }
  function l(r) {
    if (!o.disabled)
      switch (console.log(r), r.key) {
        case "home":
          f();
          break;
        case "zoom-in":
          e(1);
          break;
        case "zoom-out":
          e(-1);
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
    u.clearHold();
  }
  function t(r) {
    u.startHold(() => {
      i.changePan(r.x * o.buttonPanStep, r.y * o.buttonPanStep, p);
    }, () => {
      i.changePan(r.x * o.buttonPanStep, r.y * o.buttonPanStep, p);
    }, 300, 50);
  }
  function f() {
    i.goHome(p);
  }
  return {
    onButtonDown: l,
    onButtonUp: n
  };
}
function G(o, d) {
  let u = g(o, d), i = {
    x: 0,
    y: 0
  };
  function e(t) {
    o.disabled || t.pointerType !== "mouse" || !o.mouseEnabled || (i = {
      x: t.clientX,
      y: t.clientY
    }, document.addEventListener("pointermove", n, { passive: false }), document.addEventListener("pointerup", function(f) {
      document.removeEventListener("pointermove", n);
    }), document.addEventListener("pointerleave", function(f) {
      document.removeEventListener("pointermove", n);
    }), document.addEventListener("pointercancel", function(f) {
      document.removeEventListener("pointermove", n);
    }));
  }
  function l() {
    o.disabled || !o.dblClickEnabled || !o.zoomEnabled || u.changeZoom(o.dblClickZoomStep, "dblClick");
  }
  function n(t) {
    if (o.disabled || !o.panEnabled || t.pointerType !== "mouse" || !o.mouseEnabled) return;
    let f = {
      x: t.clientX - i.x,
      y: t.clientY - i.y
    };
    u.changePan(f.x, f.y, t.pointerType), i = {
      x: t.clientX,
      y: t.clientY
    }, t.preventDefault();
  }
  return {
    onPointerDown: e,
    onDblClick: l
  };
}
function J(o, d) {
  let u = g(o, d), i = ref({}), e = ref(0), l = null;
  function n(r) {
    if (o.disabled || !o.touchEnabled || !o.panEnabled && !o.zoomEnabled || (r.preventDefault(), r.touches.length < 1)) return;
    console.log("TouchMove: ", r, u.pan.value);
    const m = r.touches.item(0);
    if (!m) return;
    let v = 0, c = { x: m.clientX, y: m.clientY };
    if (r.touches.length === 2) {
      const z = r.touches.item(1);
      let k = t({
        x: m ? m.clientX : 0,
        y: m ? m.clientY : 0
      }, {
        x: z ? z.clientX : 0,
        y: z ? z.clientY : 0
      });
      e.value <= 0 ? (e.value = k.distance, v = 0) : v = k.distance / e.value - u.zoom.value, c = k.center;
    }
    if (o.zoomEnabled && u.changeZoom(v, "touch"), console.log("TouchMovePan: ", l, c, u.pan.value), l === null) {
      l = {
        x: c.x,
        y: c.y
      };
      return;
    }
    const B = {
      x: c.x - l.x,
      y: c.y - l.y
    };
    o.panEnabled && u.changePan(B.x, B.y, "touch"), l = {
      x: c.x,
      y: c.y
    };
  }
  function t(r, m) {
    let v = Math.sqrt(Math.pow(r.x - m.x, 2) + Math.pow(r.y - m.y, 2)), c = { x: (r.x + m.x) / 2, y: (r.y + m.y) / 2 };
    return {
      distance: v,
      center: c
    };
  }
  function f(r) {
    o.disabled || !o.touchEnabled || (l = null, document.addEventListener("touchmove", n, { passive: false }), document.addEventListener("touchend", function(m) {
      r.touches.length < 2 && (e.value = -1), document.removeEventListener("touchmove", n);
    }));
  }
  return {
    onTouchStart: f,
    touchCount: computed(() => Object.keys(i.value).length)
  };
}
function K(o, d) {
  let { changeZoom: u } = g(o, d);
  function i(e) {
    if (o.disabled || !o.wheelEnabled || !o.zoomEnabled) return;
    const l = o.wheelZoomStep * -1 * e.deltaY / Math.abs(e.deltaY);
    u(l, "wheel"), e.preventDefault();
  }
  return {
    onWheel: i
  };
}
function Q(o, d) {
  const u = J(o, d), i = K(o, d), e = G(o, d), l = F(o, d), n = g(o, d);
  return {
    zoom: n.zoom,
    pan: n.pan,
    setZoom: n.setZoom,
    setPan: n.setPan,
    onWheel: i.onWheel,
    onTouchStart: u.onTouchStart,
    onButtonUp: l.onButtonUp,
    onButtonDown: l.onButtonDown,
    onPointerDown: e.onPointerDown,
    onDblClick: e.onDblClick
  };
}
var R = defineComponent({
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
  setup(o, { emit: d }) {
    let u = d, i = o, e = ref(), l = computed(() => {
      var m;
      return (m = e.value) == null ? void 0 : m.querySelector(i.selector);
    }), n = Q(i, t);
    function t(m, v) {
      m === "zoom" ? u("update:zoom", v.zoom) : m === "panned" && u("update:pan", v.pan), u(m, v);
    }
    let f = computed(() => `translate(${n.pan.value.x}px, ${n.pan.value.y}px) scale(${n.zoom.value})`);
    function r() {
      l.value && (l.value.style.transform = f.value, l.value.style.transition = "transform 0.06s ease-out");
    }
    return watch(
      f,
      () => {
        r();
      },
      {
        flush: "post"
      }
    ), onMounted(() => {
      r();
    }), (m, v) => (openBlock(), createElementBlock("div", {
      ref_key: "container",
      ref: e,
      class: normalizeClass(m.$style.container),
      onDblclick: v[0] || (v[0] = //@ts-ignore
      (...c) => unref(n).onDblClick && unref(n).onDblClick(...c)),
      onPointerdown: v[1] || (v[1] = //@ts-ignore
      (...c) => unref(n).onPointerDown && unref(n).onPointerDown(...c)),
      onWheel: v[2] || (v[2] = //@ts-ignore
      (...c) => unref(n).onWheel && unref(n).onWheel(...c)),
      onTouchstart: v[3] || (v[3] = //@ts-ignore
      (...c) => unref(n).onTouchStart && unref(n).onTouchStart(...c))
    }, [
      renderSlot(m.$slots, "default", {}, void 0, true),
      renderSlot(m.$slots, "buttons", {}, () => [
        unref(i).enableControlButton ? (openBlock(), createBlock(q, {
          key: 0,
          onButtondown: unref(n).onButtonDown,
          onButtonup: unref(n).onButtonUp
        }, null, 8, ["onButtondown", "onButtonup"])) : createCommentVNode("", true)
      ], true)
    ], 34));
  }
});
var nn = "_container_1khwm_2";
var on = "_buttons_1khwm_11";
var tn = {
  container: nn,
  buttons: on
};
var en = {
  $style: tn
};
var an = N(R, [["__cssModules", en], ["__scopeId", "data-v-dd329317"]]);
export {
  an as default
};
//# sourceMappingURL=vue-zoomable.js.map
