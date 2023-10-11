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
  <VueZoomable
    style="width: 500px; height: 500px; border: 1px solid black"
    selector="#myContent"
    :minZoom="0.5"
    :maxZoom="3"
  >
    <svg>
      <g id="myContent">
        <circle x="10" y="10" r="50" />
      </g>
    </svg>
  </VueZoomable>
</template>

<script setup lang="ts">
import "vue-zoomable/dist/style.css";
import VueZoomable from "vue-zoomable";
</script>
```

<script>
</script>
