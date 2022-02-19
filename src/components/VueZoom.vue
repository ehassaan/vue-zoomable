<template>
  <div>
    <slot ref="root" />
  </div>
</template>


<script>
import svg_pan_zoom from "svg-pan-zoom";
import { onMounted, ref } from "vue";


export default {
  props: props,
  computed: {
    has_thumbnail: function () {
      return this.$slots.thumbnail;
    },
    options: function () {
      let options = {};
      const is_defined = (k) => this[k] !== undefined;
      Object.keys(this.props)
        .filter(is_defined)
        .forEach((k) => (options[k] = this[k]));
      return options;
    },
  },
  setup(props) {
    let root = ref(null);

    onMounted(() => {
      console.log("SVG Pan Zoom: ", this);
      let options = {};
      Object.keys(props)
        .filter((k) => props[k] !== undefined)
        .forEach((k) => (options[k] = props[k]));
      options.onZoom = (...args) => {
        this.bus.$emit("mainZoom");
        if (this.onZoom) this.onZoom(args);
      };
      options.onPan = (...args) => {
        this.bus.$emit("mainPan");
        if (this.onPan) this.onPan(args);
      };
      this.spz = svg_pan_zoom(root, options);
      this.$emit("svgpanzoom", this.spz);
    });

    return {
      root,
    };
  },
  data: () => ({
    spz: null,
    bus: this,
  }),
  mounted: function () {},
  methods: {
    zoom: function (v) {
      this.spz.zoom(v);
    },
    zoomBy: function (v) {
      this.spz.zoomBy(v);
    },
  },
};
</script>
