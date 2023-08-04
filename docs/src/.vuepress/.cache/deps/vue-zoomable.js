import {
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  defineComponent,
  inject,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  renderSlot,
  unref,
  watch,
  withModifiers
} from "./chunk-3TUUMKET.js";
import {
  normalizeClass,
  toDisplayString
} from "./chunk-L52MBEYQ.js";

// node_modules/.pnpm/file+..+vue-zoomable-1.1.5.tgz_vue@3.3.4/node_modules/vue-zoomable/dist/vue-zoomable.mjs
function q(t, a, e, o, i) {
  let u = {
    x: 0,
    y: 0
  };
  function d(n) {
    t.mouseEnabled && (u = {
      x: n.clientX,
      y: n.clientY
    }, window.addEventListener("mousemove", m), window.addEventListener("mouseup", () => {
      window.removeEventListener("mousemove", m);
    }));
  }
  function m(n) {
    if (!t.panEnabled)
      return;
    let c = {
      x: n.clientX - u.x,
      y: n.clientY - u.y
    };
    e.value = {
      x: e.value.x + c.x,
      y: e.value.y + c.y
    }, u = {
      x: n.clientX,
      y: n.clientY
    };
    let v = {
      zoom: o.value,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: c.x,
        deltaY: c.y
      },
      type: "mouse"
    };
    a("panned", v);
  }
  function s() {
    if (!t.dblClickEnabled || !t.zoomEnabled)
      return;
    let n = o.value + t.dblClickZoomStep;
    if (n == t.maxZoom)
      return;
    n > t.maxZoom ? o.value = t.maxZoom : o.value = n;
    let c = {
      zoom: n,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: "dblClick"
    };
    a("zoom", c);
  }
  return {
    onMouseDown: d,
    onDblClick: s
  };
}
function F(t, a, e, o, i) {
  let u = {
    x: 0,
    y: 0
  };
  function d(s) {
    if (!t.touchEnabled)
      return;
    let n = s.changedTouches.item(s.changedTouches.length - 1);
    n && (u = {
      x: n.clientX,
      y: n.clientY
    }, window.addEventListener("touchmove", m, { passive: false }), window.addEventListener("touchend", (c) => {
      window.removeEventListener("touchmove", m), c.preventDefault();
    }));
  }
  function m(s) {
    if (!t.panEnabled)
      return;
    let n = s.changedTouches.item(s.changedTouches.length - 1);
    if (!n)
      return;
    let c = {
      x: n.clientX - u.x,
      y: n.clientY - u.y
    };
    e.value = {
      x: e.value.x + c.x,
      y: e.value.y + c.y
    }, u = {
      x: n.clientX,
      y: n.clientY
    };
    let v = {
      zoom: o.value,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: c.x,
        deltaY: c.y
      },
      type: "touch"
    };
    a("panned", v), s.preventDefault();
  }
  return {
    onTouchStart: d
  };
}
function U(t, a, e, o, i, u) {
  function d(m) {
    if (!t.wheelEnabled || !t.zoomEnabled)
      return;
    let s = o.value + t.dblClickZoomStep * m.deltaY / Math.abs(m.deltaY);
    if (t.enableWheelOnKey !== void 0 && !i.value.has(t.enableWheelOnKey)) {
      u();
      return;
    }
    if (s > t.maxZoom)
      o.value = t.maxZoom;
    else {
      if (s == t.maxZoom || s == t.minZoom || isNaN(s))
        return;
      s < t.minZoom ? o.value = t.minZoom : o.value = s;
    }
    console.log("Wheel: ", s, m);
    let n = {
      zoom: o.value,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: "wheel"
    };
    a("zoom", n);
  }
  return {
    onWheel: d
  };
}
function G(t, a, e, o) {
  const i = "controll_button", u = {
    up: { x: 0, y: t.buttonPanStep },
    right: { x: -t.buttonPanStep, y: 0 },
    down: { x: 0, y: -t.buttonPanStep },
    left: { x: t.buttonPanStep, y: 0 }
  }, d = {
    in: t.buttonZoomStep,
    out: -t.buttonZoomStep
  };
  let m = function(v) {
    const y = v.currentTarget;
    return y ? y.getAttribute("data-direction") : (console.warn("The target of the event is null, which shouldn't be the case."), null);
  };
  function s(v) {
    const y = m(v);
    if (!y)
      return;
    if (!(y in u)) {
      console.error("The direction " + y + " doesn't exist, and this really should not happen.");
      return;
    }
    const h = u[y];
    e.value = {
      x: e.value.x + h.x,
      y: e.value.y + h.y
    };
    let x = {
      zoom: o.value,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: h.x,
        deltaY: h.y
      },
      type: i
    };
    a("panned", x);
  }
  function n(v) {
    const y = m(v);
    if (!y)
      return;
    if (!(y in d)) {
      console.error("The direction " + y + " doesn't exist, and this really should not happen.");
      return;
    }
    const h = d[y];
    let x = o.value + h;
    if (x == t.maxZoom || x == t.minZoom)
      return;
    x > t.maxZoom ? o.value = t.maxZoom : x < t.minZoom ? o.value = t.minZoom : o.value = x;
    let k = {
      zoom: o.value,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: i
    };
    a("zoom", k);
  }
  function c() {
    o.value = t.initialZoom, a("zoom", {
      zoom: o.value,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: 0,
        deltaY: 0
      },
      type: i
    });
    let v = {
      x: t.initialPanX - e.value.x,
      y: t.initialPanY - e.value.y
    };
    e.value = {
      x: t.initialPanX,
      y: t.initialPanY
    }, a("panned", {
      zoom: o.value,
      pan: {
        x: e.value.x,
        y: e.value.y,
        deltaX: v.x,
        deltaY: v.y
      },
      type: i
    });
  }
  return {
    onPan: s,
    onZoom: n,
    onHome: c
  };
}
var b = (t) => (pushScopeId("data-v-6c8f1aa4"), t = t(), popScopeId(), t);
var J = { class: "controll" };
var Q = { class: "controll__item controll__item--circle" };
var R = { class: "controll__pan controll__item--circle__inner" };
var ee = { class: "controll__pan__up controll__item--circle__inner__up" };
var te = b(() => createBaseVNode("svg", {
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
], -1));
var oe = [
  te
];
var ne = { class: "controll__pan__right controll__item--circle__inner__right" };
var le = b(() => createBaseVNode("svg", {
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
], -1));
var ie = [
  le
];
var ae = { class: "controll__pan__down controll__item--circle__inner__down" };
var re = b(() => createBaseVNode("svg", {
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
], -1));
var ue = [
  re
];
var se = { class: "controll__pan__left controll__item--circle__inner__left" };
var ce = b(() => createBaseVNode("svg", {
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
], -1));
var de = [
  ce
];
var me = { class: "controll__home controll__item controll__item--list-item" };
var ve = createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minimize-2" data-v-6c8f1aa4><polyline points="4 14 10 14 10 20" data-v-6c8f1aa4></polyline><polyline points="20 10 14 10 14 4" data-v-6c8f1aa4></polyline><line x1="14" y1="10" x2="21" y2="3" data-v-6c8f1aa4></line><line x1="3" y1="21" x2="10" y2="14" data-v-6c8f1aa4></line></svg>', 1);
var ye = [
  ve
];
var _e = { class: "controll__zoom-in controll__item controll__item--list-item" };
var fe = createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zoom-in" data-v-6c8f1aa4><circle cx="11" cy="11" r="8" data-v-6c8f1aa4></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-6c8f1aa4></line><line x1="11" y1="8" x2="11" y2="14" data-v-6c8f1aa4></line><line x1="8" y1="11" x2="14" y2="11" data-v-6c8f1aa4></line></svg>', 1);
var he = [
  fe
];
var xe = { class: "controll__zoom-in controll__item controll__item--list-item" };
var we = b(() => createBaseVNode("svg", {
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
], -1));
var pe = [
  we
];
var be = defineComponent({
  __name: "ControllButtons",
  emits: ["button-pan", "button-zoom", "button-home"],
  setup(t, { emit: a }) {
    return (e, o) => (openBlock(), createElementBlock("div", {
      class: "controll__buttons",
      onDblclick: o[7] || (o[7] = withModifiers(() => {
      }, ["stop"])),
      onMousedown: o[8] || (o[8] = withModifiers(() => {
      }, ["stop"]))
    }, [
      createBaseVNode("ul", J, [
        createBaseVNode("li", Q, [
          createBaseVNode("ul", R, [
            createBaseVNode("li", ee, [
              createBaseVNode("a", {
                onClick: o[0] || (o[0] = (i) => a("button-pan", i)),
                "data-direction": "up"
              }, oe)
            ]),
            createBaseVNode("li", ne, [
              createBaseVNode("a", {
                onClick: o[1] || (o[1] = (i) => a("button-pan", i)),
                "data-direction": "right"
              }, ie)
            ]),
            createBaseVNode("li", ae, [
              createBaseVNode("a", {
                onClick: o[2] || (o[2] = (i) => a("button-pan", i)),
                "data-direction": "down"
              }, ue)
            ]),
            createBaseVNode("li", se, [
              createBaseVNode("a", {
                onClick: o[3] || (o[3] = (i) => a("button-pan", i)),
                "data-direction": "left"
              }, de)
            ])
          ])
        ]),
        createBaseVNode("li", me, [
          createBaseVNode("a", {
            onClick: o[4] || (o[4] = (i) => {
              a("button-home");
            })
          }, ye)
        ]),
        createBaseVNode("li", _e, [
          createBaseVNode("a", {
            onClick: o[5] || (o[5] = (i) => {
              a("button-zoom", i);
            }),
            "data-direction": "in"
          }, he)
        ]),
        createBaseVNode("li", xe, [
          createBaseVNode("a", {
            onClick: o[6] || (o[6] = (i) => {
              a("button-zoom", i);
            }),
            "data-direction": "out"
          }, pe)
        ])
      ])
    ], 32));
  }
});
var z = (t, a) => {
  const e = t.__vccOpts || t;
  for (const [o, i] of a)
    e[o] = i;
  return e;
};
var ge = z(be, [["__scopeId", "data-v-6c8f1aa4"]]);
var ke = defineComponent({
  __name: "ScrollOverlay",
  props: {
    enableWheelOnKey: {
      type: String,
      default: void 0
    }
  },
  setup(t) {
    const a = t, { hideOverlay: e } = inject("hideOverlay");
    return (o, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["overlay", { hidden: unref(e) }])
    }, [
      createBaseVNode("p", null, "Use '" + toDisplayString(a.enableWheelOnKey) + "' + 'scroll' to zoom", 1)
    ], 2));
  }
});
var Ze = z(ke, [["__scopeId", "data-v-49742904"]]);
var Ce = defineComponent({
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
    },
    enableControllButton: {
      type: Boolean,
      default: false
    },
    buttonPanStep: {
      type: Number,
      default: 15
    },
    buttonZoomStep: {
      type: Number,
      default: 0.1
    },
    enableWheelOnKey: {
      type: String,
      default: void 0
    }
  },
  emits: ["panned", "zoom", "update:zoom", "update:pan"],
  setup(t, { emit: a }) {
    const e = t, o = ref(true);
    let i = ref(), u = ref(e.minZoom);
    e.initialZoom >= e.minZoom && e.initialZoom <= e.maxZoom && (u.value = e.initialZoom), e.zoom && (u.value = e.zoom);
    let d = ref({
      x: e.pan != null ? e.pan.x : e.initialPanX,
      y: e.pan != null ? e.pan.y : e.initialPanY
    });
    watch(
      () => e.zoom,
      () => {
        isNaN(e.zoom) || (u.value = e.zoom);
      }
    ), watch(
      () => e.pan,
      () => {
        e.pan && (d.value.x = e.pan.x, d.value.x = e.pan.y);
      }
    );
    function m(r, _) {
      r === "zoom" ? a("update:zoom", _.zoom) : r === "panned" && a("update:pan", _.pan), a(r, _);
    }
    let s = computed(() => `translate(${d.value.x}px, ${d.value.y}px) scale(${u.value})`), n = null;
    function c() {
      var r;
      n || (n = (r = i.value) == null ? void 0 : r.querySelector(e.selector)), n && (n.style.transform = s.value);
    }
    watch(
      s,
      () => {
        c();
      },
      {
        flush: "post"
      }
    ), onMounted(() => {
      const r = document.createElement("div"), _ = createApp(Ze, { enableWheelOnKey: e.enableWheelOnKey });
      _.provide("hideOverlay", { hideOverlay: o }), _.mount(r), i.value.appendChild(r), c();
    });
    const v = ref(/* @__PURE__ */ new Set());
    window.addEventListener(
      "wheel",
      (r) => {
        !y.value || e.enableWheelOnKey !== "Control" || r.ctrlKey && r.preventDefault();
      },
      { passive: false }
    ), document.addEventListener("keydown", (r) => {
      v.value.add(r.key), r.key === e.enableWheelOnKey && (o.value = true);
    }), document.addEventListener("keyup", (r) => {
      v.value.delete(r.key);
    });
    const y = ref(false);
    function h() {
      y.value = true;
    }
    function x() {
      o.value = true, y.value = false;
    }
    function k() {
      o.value = false;
    }
    function O(r) {
      o.value = r;
    }
    let Z = q(e, m, d, u), Y = F(e, m, d, u), M = U(e, m, d, u, v, k), C = G(e, m, d, u);
    function N(r) {
      O(true), Z.onMouseDown(r);
    }
    return (r, _) => (openBlock(), createElementBlock("div", {
      ref_key: "container",
      ref: i,
      class: normalizeClass(["container", r.$style.container]),
      onMousedown: N,
      onDblclick: _[1] || (_[1] = //@ts-ignore
      (...w) => unref(Z).onDblClick && unref(Z).onDblClick(...w)),
      onTouchstart: _[2] || (_[2] = //@ts-ignore
      (...w) => unref(Y).onTouchStart && unref(Y).onTouchStart(...w)),
      onWheel: _[3] || (_[3] = //@ts-ignore
      (...w) => unref(M).onWheel && unref(M).onWheel(...w)),
      onMouseleave: x,
      onMouseenter: h
    }, [
      renderSlot(r.$slots, "default"),
      unref(e).enableControllButton ? (openBlock(), createBlock(ge, {
        key: 0,
        onButtonHome: unref(C).onHome,
        onButtonPan: unref(C).onPan,
        onButtonZoom: unref(C).onZoom,
        onMousedown: _[0] || (_[0] = (w) => {
          O(true);
        })
      }, null, 8, ["onButtonHome", "onButtonPan", "onButtonZoom"])) : createCommentVNode("", true)
    ], 34));
  }
});
var Se = "_container_15bed_3";
var Be = {
  container: Se
};
var Ee = {
  $style: Be
};
var Oe = z(Ce, [["__cssModules", Ee]]);
export {
  Oe as default
};
//# sourceMappingURL=vue-zoomable.js.map
