---
sidebar:
  - text: SVG Content
    link: ./svg-demo
  - text: HTML Demo
    link: ./html-demo
  - text: Reactivity Demo
    link: ./reactivity-demo
---

<HtmlDemo></HtmlDemo>

```vue
<template>
  <VueZoomable
    style="width: 500px; height: 500px; border: 1px solid black"
    :selector="#boxes"
    :minZoom="0.3"
    :maxZoom="2"
    :dblClickZoomStep="0.4"
    :wheelZoomStep="0.01"
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
import "vue-zoomable/dist/style.css";
import VueZoomable from "vue-zoomable";
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
```

<script>
</script>
