<template>
<div></div>
  <!-- <svg
    class="thumbViewClass"
    @click="updateMainViewPan"
    @mousemove="updateMainViewPan"
  >
    <rect class="scope" :x="x" :y="y" :width="width" :height="height" />
  </svg> -->
</template>
<script setup lang="ts">
// import { defineProps, reactive } from "vue";
// defineProps(["mainSPZ", "thumbnailSPZ"]);

// let cords = reactive({ x: 0, y: 0, width: 0, height: 0 })

//   watch: {
//     mainSPZ() {
//       updateScope.call(this);
//     },
//     thumbnailSPZ() {
//       updateScope.call(this);
//     },
//   },
//   mounted() {
//     const up = updateScope.bind(this);
//     ["mainZoom", "mainPan", "thumbnailCreated"].forEach((event) =>
//       this.bus.$on(event, up)
//     );
//     up();
//   },
//   methods: {
//     updateMainViewPan,
//   },
// };
</script>

<style scoped>
.scope {
  fill: red;
  fill-opacity: 0.1;
  stroke: red;
  stroke-width: 2px;
}
svg.thumbViewClass {
  border: 1px solid black;
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 20%;
  height: 30%;
  margin: 3px;
  padding: 3px;
  overflow: hidden;
  z-index: 120;
}
</style>
