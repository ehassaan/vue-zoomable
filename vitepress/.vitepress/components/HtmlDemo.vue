<template>

  <div>
    <VueZoomable style="width: 500px; height: 500px; border: 1px solid black" selector="#boxes" :minZoom="0.3"
      :maxZoom="2" :dblClickZoomStep="0.4" :wheelZoomStep="0.01" v-model:pan="pan" v-model:zoom="zoom">
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
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import "vue-zoomable/dist/style.css";
import VueZoomable from "vue-zoomable";

const zoom = ref(1);
const pan = ref({ x: 100, y: 100 });

</script>

<style>
#boxes {
  display: flex;
  flex-direction: column;
}

#boxes>div {
  display: flex;
  flex-direction: row;
}

#boxes>div>div {
  margin: 50px;
  background-color: blue;
  height: 100px;
  width: 100px;
}
</style>
