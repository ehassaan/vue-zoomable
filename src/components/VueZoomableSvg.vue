<template>
  <div ref="root">
    <slot />
  </div>

  <!-- <VueThumbnail
    v-if="showThumbnail"
    :onThumbnailShown="onThumbnailShown"
    :mainSPZ="spz"
    :bus="bus"
  >
    <slot name="thumbnail"></slot>
  </VueThumbnail> -->
</template>

<script setup lang="ts">
// import VueThumbnail from "./VueThumbnail.vue";
import { emits, props as allProps } from "../utils/api";
import init from "../utils/initZoom";
import { onMounted, ref } from "vue";
import { defineExpose } from "vue";

let props = defineProps(
  Object.assign(allProps, {
    showThumbnail: String,
  })
);
let emit = defineEmits(emits);

let root = ref();

onMounted(() => {
  console.log(this);
  let exp = init(props, emit, root.value.children[0], emits);
  defineExpose(exp);
});
</script>

<style scoped>
</style>
