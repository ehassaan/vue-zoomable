
<template>
  <input type="checkbox" v-model="zoomEnabled" />Zoom
  <input type="checkbox" v-model="panEnabled" />Pan
  <input type="checkbox" v-model="dbClickEnabled" />DblClickZoom
  <input type="checkbox" v-model="ctrlIconEnabled" />CtrlIcons
  <input type="checkbox" v-model="mouseWheelZoomEnabled" />MouseWheel
  <input type="checkbox" v-model="visible" />Visible

  <VueZoomableSvg
    style="width: 500px; height: 500px; border: 1px solid black"
    :zoomEnabled="zoomEnabled"
    :panEnabled="panEnabled"
    :controlIconsEnabled="ctrlIconEnabled"
    :fit="false"
    :center="true"
    @beforePan="beforePan"
    @svgpanzoom="svgpanzoom"
    :dblClickZoomEnabled="dbClickEnabled"
    :mouseWheelZoomEnabled="mouseWheelZoomEnabled"
  >
    <svg v-if="visible">
      <circle x="10" y="10" r="50" />
    </svg>
  </VueZoomableSvg>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueZoomableSvg from "./components/VueZoomableSvg.vue";

let zoomEnabled = ref(true);
let panEnabled = ref(true);
let dbClickEnabled = ref(true);
let ctrlIconEnabled = ref(true);
let mouseWheelZoomEnabled = ref(true);
let visible = ref(false);

let beforePan = (ev: any) => {
  // console.log(ev);
  // ev.preventDefault();
};


let svgpanzoom = (ev: any) => {
  console.log(ev);
};

</script>
