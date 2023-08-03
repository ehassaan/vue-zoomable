<template>
  <form>
    <input type="checkbox" v-model="zoomEnabled" />zoomEnabled
    <input type="checkbox" v-model="panEnabled" />panEnabled
    <input type="checkbox" v-model="dbClickEnabled" />dblClickEnabled
    <input type="checkbox" v-model="touchEnabled" />touchEnabled
    <input type="checkbox" v-model="mouseWheelZoomEnabled" />wheelEnabled
    <input type="checkbox" v-model="visible" />Slot Content
    <input type="checkbox" v-model="enableControllButton" />Controll Button Enabled
  </form>

  <VueZoomable
    v-model:zoom="zoom"
    v-model:pan="pan"
    style="width: 500px; height: 500px; border: 1px solid black"
    :zoomEnabled="zoomEnabled"
    :panEnabled="panEnabled"
    selector="#boxes"
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
    <div id="boxes">
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  </VueZoomable>
  <div>
    zoom: {{ zoom }}
  </div>
  <div>
    pan: {{ pan }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueZoomable from "../components/VueZoomable.vue";

const zoom = ref(0.2);
const pan = ref({ x: 0, y: 100 });

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
#boxes {
  display: flex;
  flex-direction: column;
}

#boxes > div {
  display: flex;
  flex-direction: row;
}

#boxes > div > div {
  margin: 50px;
  background-color: blue;
  height: 100px;
  width: 100px;
}
</style>
