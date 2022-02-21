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

<script lang="ts">
// import VueThumbnail from "./VueThumbnail.vue";
import { nativeEmits, observableProps, props as allProps } from "../utils/api";
import init from "../utils/initZoom";
import { onMounted, ref, SetupContext, watchEffect, onUnmounted } from "vue";

export default {
  props: Object.assign(allProps, {
    showThumbnail: String,
  }),

  setup(props: any, context: SetupContext) {
    let root = ref();

    onMounted(() => {
      let svgId = props.viewportSelector;
      if (!props.viewportSelector) {
        svgId = "svg_" + ((Math.random() * 100) | 0);
        root.value.children[0].id = svgId;
        svgId = "#" + svgId;
      }
      let exp = init(props, context.emit, svgId, nativeEmits);
      onUnmounted(() => {
        exp.spz.destroy();
      });

      context.expose(exp);

      for (let k in observableProps) {
        watchEffect(() => {
          observableProps[k](props[k], exp.spz);
        });
      }
    });

    return {
      root,
    };
  },
};
</script>

<style scoped>
</style>
