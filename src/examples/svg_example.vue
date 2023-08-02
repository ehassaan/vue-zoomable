
<template>
  <form>
    <!-- <button @click="() => visible = !visible">{{ visible ? 'Show' : 'Hide' }}</button> -->
    <input type="checkbox" v-model="zoomEnabled" />zoomEnabled
    <input type="checkbox" v-model="panEnabled" />panEnabled
    <input type="checkbox" v-model="dbClickEnabled" />dblClickEnabled
    <input type="checkbox" v-model="touchEnabled" />touchEnabled
    <input type="checkbox" v-model="mouseWheelZoomEnabled" />wheelEnabled
    <input type="checkbox" v-model="visible" />Slot Content
    <input type="checkbox" v-model="enableControllButton" />Controll Button Enabled
  </form>
  <!-- :eventsListenerElement="listener" -->

  <VueZoomable
    style="width: 500px; height: 500px; border: 1px solid black"
    selector="#container1"
    :zoomEnabled="zoomEnabled"
    :panEnabled="panEnabled"
    :initialPanX="100"
    :initialPanY="120"
    :initialZoom="1.5"
    :svgChild="true"
    :dblClickEnabled="dbClickEnabled"
    :wheelEnabled="mouseWheelZoomEnabled"
    :touchEnabled="touchEnabled"
    :minZoom="0.3"
    :maxZoom="2"
    :dblClickZoomStep="0.4"
    :wheelZoomStep="0.01"
    :enableControllButton="enableControllButton"
    @zoom="onZoom"
    @panned="onPan"
  >
    <svg v-if="visible">
      <g id="container1">
        <circle x="10" y="10" r="50" />
      </g>
    </svg>
  </VueZoomable>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueZoomable from "../components/VueZoomable.vue";

let zoomEnabled = ref(true);
let panEnabled = ref(true);
let dbClickEnabled = ref(true);
let touchEnabled = ref(true);
let mouseWheelZoomEnabled = ref(true);
let visible = ref(true);
let enableControllButton = ref(true);

let onPan = (ev: any) => {
  console.log(ev);
};

let onZoom = (ev: any) => {
  console.log(ev);
};

</script>
<style>
</style>
