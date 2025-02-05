<template>
  <form class="controls">
    <div>
      <input type="checkbox" v-model="zoomEnabled" />
      <label>zoomEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="dblClickEnabled" />
      <label>dblClickEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="touchEnabled" />
      <label>touchEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="mouseWheelZoomEnabled" />
      <label>mouseWheelZoomEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="visible" />
      <label>Slot Content</label>
    </div>
    <div>
      <input type="checkbox" v-model="documentFlow" />
      <label>DocumentFlow</label>
    </div>
    <div>
      <input type="checkbox" v-model="enableControlButton" />
      <label>Control Button Enabled</label>
    </div>
    <div>
      <label>Pan X</label>
      <input type="number" v-model="pan.x">
    </div>
    <div>
      <label>Pan Y</label>
      <input type="number" v-model="pan.y">
    </div>
    <div>
      <label>Zoom</label>
      <input type="number" v-model="zoom">
    </div>
    <div>
      <label>Min Zoom</label>
      <input type="number" v-model="minZoom">
    </div>
    <div>
      <label>Max Zoom</label>
      <input type="number" v-model="maxZoom">
    </div>
    <div>
      <label>Zoom Origin</label>
      <select v-model="zoomOrigin">
        <option value="content-center">content-center</option>
        <option value="pointer">pointer</option>
        <option value="center">center</option>
      </select>
    </div>
    <div>
      <label>Slot Content Type</label>
      <select v-model="slotContentType">
        <option value="html">HTML</option>
        <option value="svg">SVG</option>
      </select>
    </div>
    <div>
      <label>Selector</label>
      <input type="text" v-model="selector">
    </div>
  </form>

  <div v-if="slotContentType === 'svg'">
    <VueZoomable style="width: 500px; height: 500px; border: 1px solid black" :selector="selector"
      :zoomEnabled="zoomEnabled" :panEnabled="panEnabled" :initialPanX="100" :initialPanY="120" :initialZoom="1.5"
      :svgChild="true" :dblClickEnabled="dblClickEnabled" :wheelEnabled="mouseWheelZoomEnabled"
      :touchEnabled="touchEnabled" :minZoom="minZoom" :maxZoom="maxZoom" :dblClickZoomStep="0.4" :wheelZoomStep="0.01"
      v-model:pan="pan" v-model:zoom="zoom" :enableControlButton="enableControlButton" @zoom="showEvent"
      @panned="showEvent">
      <svg class="mysvg" v-if="visible">
        <g id="zoomable-content">
          <circle x="10" y="10" r="50" />
        </g>
      </svg>
    </VueZoomable>
  </div>
  <div v-else>
    <VueZoomable style="width: 500px; height: 500px; border: 1px solid black" :selector="selector"
      :zoomEnabled="zoomEnabled" :panEnabled="panEnabled" :initialPanX="100" :initialPanY="120" :initialZoom="1.5"
      :dblClickEnabled="dblClickEnabled" :wheelEnabled="mouseWheelZoomEnabled" :touchEnabled="touchEnabled"
      :minZoom="minZoom" :maxZoom="maxZoom" :dblClickZoomStep="0.4" :wheelZoomStep="0.01" v-model:pan="pan"
      v-model:zoom="zoom" :enableControlButton="enableControlButton" @zoom="showEvent" @panned="showEvent">
      <div id="zoomable-content">
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
  </div>

  <div>
    zoom: {{ zoom }}
  </div>
  <div>
    pan: {{ pan }}
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import "vue-zoomable/dist/style.css";
import VueZoomable from "vue-zoomable";

const zoom = ref(0.5);
const pan = ref({ x: 0, y: 0 });
const slotContentType = ref("html");
const zoomOrigin = ref("content-center");
const maxZoom = ref(2);
const minZoom = ref(0.3);
const selector = ref("#zoomable-content");

function showEvent(ev: any) {
  // console.log(ev)
  // zoom.value = ev.zoom;
  // pan.value = {
  //   x: ev.pan.x,
  //   y: ev.pan.y,
  // };
}

let zoomEnabled = ref(true);
let panEnabled = ref(true);
let dblClickEnabled = ref(true);
let touchEnabled = ref(true);
let mouseWheelZoomEnabled = ref(true);
let visible = ref(true);
let documentFlow = ref(false);
let enableControlButton = ref(true);
</script>

<style>
.controls {
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  grid-template-columns: auto auto auto;
  width: 100%;
  align-content: stretch;
  align-items: stretch;
  justify-content: stretch;
  /* height: 200px; */
}

.controls>div {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 5px;
  align-items: center;
}

.controls>div>label {
  margin-left: 5px;
  margin-right: 5px;
  flex-grow: 1;
}

.controls>div>input {
  padding: 5px;
  min-height: 18px;
  min-width: 18px;
  font-size: 14px;
  border-bottom: 1px solid var(--vp-c-brand);
}

.controls>div>checkbox {
  padding: 5px;
  border-bottom: 1px solid var(--vp-c-brand);
}

.controls>div>select {
  padding: 3px 6px;
  min-width: 60px;
  text-align: center;
  background-color: var(--vp-c-brand-2);
  color: white;
}

.mysvg {
  height: 100%;
  width: 100%;
}

#zoomable-content {
  display: flex;
  flex-direction: column;
}

#zoomable-content>div {
  display: flex;
  flex-direction: row;
}

#zoomable-content>div>div {
  margin: 50px;
  background-color: blue;
  height: 100px;
  width: 100px;
}
</style>
