---
sidebar:
  - text: SVG Content
    link: ./svg-demo
  - text: HTML Demo
    link: ./html-demo
  - text: Reactivity Demo
    link: ./reactivity-demo
---

<SvgDemo></SvgDemo>

```vue
<template>
  <div>
    <VueZoomable style="width: 500px; height: 500px; border: 1px solid black" selector="#container1"
      :initialPanX="100"
      :initialPanY="120"
      :initialZoom="1.5"
      :svgChild="true"
      :minZoom="0.3"
      :maxZoom="2"
      :dblClickZoomStep="0.4"
      :wheelZoomStep="0.01"
      v-model:pan="pan"
      v-model:zoom="zoom">
      <svg class="mysvg">
        <g id="container1">
          <circle x="10" y="10" r="50" />
        </g>
      </svg>
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

const zoom = ref(1.0);
const pan = ref({ x: 100, y: 100 });

</script>

<style>
.mysvg {
  height: 100%;
  width: 100%;
}
</style>

```

<script>
</script>
