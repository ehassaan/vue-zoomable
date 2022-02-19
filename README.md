# vue-zoomable

Simple Vue 3 wrapper on svg-pan-zoom.js library written using composition API with Typescript support.

# Installation

`npm install vue-zoomable`

# Usage

```
<template>
    <VueZoomableSvg
    style="width: 500px; height: 500px; border: 1px solid black"
    :zoomEnabled="true"
    :controlIconsEnabled="true"
    :fit="false"
    :center="true"
    >
        <svg>
        <circle x="10" y="10" r="50" />
        </svg>
  </VueZoomableSvg>

</template>

<script setup lang="ts">
    import VueZoomableSvg from "./components/VueZoomableSvg.vue";
</script>

```

# Acknowledgements
- [vue-svg-pan-zoom](https://www.npmjs.com/package/vue-svg-pan-zoom)
