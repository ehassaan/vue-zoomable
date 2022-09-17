
<template>
  <form>
    <input type="checkbox" v-model="zoomEnabled" />zoomEnabled
    <input type="checkbox" v-model="panEnabled" />panEnabled
    <input type="checkbox" v-model="dbClickEnabled" />dblClickEnabled
    <input type="checkbox" v-model="touchEnabled" />touchEnabled
    <input type="checkbox" v-model="mouseWheelZoomEnabled" />wheelEnabled
  </form>

  <VueZoomable
    style="width: 500px; height: 500px; border: 1px solid black"
    selector="#boxes"
    :zoomEnabled="zoomEnabled"
    :panEnabled="panEnabled"
    :dblClickEnabled="dbClickEnabled"
    :wheelEnabled="mouseWheelZoomEnabled"
    :touchEnabled="touchEnabled"
    :minZoom="0.3"
    :maxZoom="2"
    :dblClickZoomStep="0.4"
    :wheelZoomStep="0.01"
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueZoomable from "vue-zoomable";
import "../../../node_modules/vue-zoomable/dist/style.css";

let zoomEnabled = ref(true);
let panEnabled = ref(true);
let dbClickEnabled = ref(true);
let touchEnabled = ref(true);
let mouseWheelZoomEnabled = ref(true);
let visible = ref(true);

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
  overflow: hidden;
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