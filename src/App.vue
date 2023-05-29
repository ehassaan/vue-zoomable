<template>
  <div style="overflow: hidden">
    <component :is="Div"></component>
  </div>
</template>

<script setup lang="ts">
import Div from "./examples/div_example.vue";
import Svg from "./examples/svg_example.vue";
</script>

<style scoped></style>
