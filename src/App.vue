<template>
  <div style="overflow: hidden">
    <component :is="Example"></component>
  </div>
</template>

<script setup lang="ts">
import Div from "./examples/div_example.vue";
import Svg from "./examples/svg_example.vue";
import Example from "./examples/reactivity_example.vue";
</script>

<style scoped></style>
