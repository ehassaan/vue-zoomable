
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
