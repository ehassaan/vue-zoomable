
<template>
<TestVBind></TestVBind>
  <form>
    <select>
      <option disabled value>Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />

    <!-- <button @click="() => visible = !visible">{{ visible ? 'Show' : 'Hide' }}</button> -->
    <input type="checkbox" v-model="zoomEnabled" />Zoom
    <input type="checkbox" v-model="panEnabled" />Pan
    <input type="checkbox" v-model="dbClickEnabled" />DblClickZoom
    <input type="checkbox" v-model="ctrlIconEnabled" />CtrlIcons
    <input type="checkbox" v-model="mouseWheelZoomEnabled" />
    MouseWheel
    {{ listener }}
  </form>
  <!-- :eventsListenerElement="listener" -->

  <VueZoomable
    style="width: 500px; height: 500px; border: 1px solid black"
    :disablePan="!panEnabled"
    :disableZoom="!zoomEnabled"
    :zoom="1.5"
    :panX="100"
    @ready="ready"
  >
    <svg v-if="visible">
      <circle x="10" y="10" r="50" />
    </svg>
  </VueZoomable>
</template>

<script setup lang="ts">
import { ref } from "vue";
import VueZoomable from "./components/VueZoomable.vue";
import TestVBind from "./components/TestVBind.vue";

let zoomEnabled = ref(true);
let panEnabled = ref(true);
let dbClickEnabled = ref(true);
let ctrlIconEnabled = ref(true);
let mouseWheelZoomEnabled = ref(true);
let visible = ref(true);
let listener = ref('window');


// let onSelect = (ev: any) => {
//   listener.value = ev.target.value
// }

// let mywindow = window;
let beforePan = (ev: any) => {
  // console.log(ev);
  // ev.preventDefault();
};


let ready = (ev: any) => {
  console.log(ev);
  ev.pz.zoom(2);
  setTimeout(() => ev.pz.pan(100, 100))
};

</script>
