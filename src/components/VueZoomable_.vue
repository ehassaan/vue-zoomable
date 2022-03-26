<template>
  <div ref="root">
    <slot />
  </div>
</template>

<script lang="ts">
// import VueThumbnail from "./VueThumbnail.vue";
import { nativeEmits, props as allProps } from "../utils/api";
import init, { getOptions } from "../utils/initPanZoom";
import { PanzoomObject } from "@panzoom/panzoom";
import { onMounted, ref, SetupContext, onUnmounted, watch } from "vue";

function initPz(props: any, context: SetupContext, root: any) {
  if (root.value.children.length == 0) return null;
  let pz = init(props, context.emit, root.value.children[0], nativeEmits);

  return pz;
}

export default {
  props: allProps,

  setup(props: any, context: SetupContext) {
    let root = ref();
    let pz: PanzoomObject | null = null;

    // initialize when the first time slot content is added
    let unwatch = watch(
      () => context.slots.default?.(),
      () => {
        if (pz) {
          unwatch();
          return;
        };
        pz = initPz(props, context, root);
        unwatch();
      },
      {
        flush: "post",
      }
    );

    watch(
      props,
      () => {
        if (!pz) return;
        pz.setOptions(getOptions(props));
      },
      {
        flush: "post",
      }
    );

    onMounted(() => {
      pz = initPz(props, context, root);
    });

    onUnmounted(() => {
      if (pz) pz.destroy();
    });

    return {
      root,
    };
  },
};
</script>

<style scoped>
</style>
