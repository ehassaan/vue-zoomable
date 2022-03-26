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
  </VueThumbnail>-->
</template>

<script lang="ts">
// import VueThumbnail from "./VueThumbnail.vue";
import { nativeEmits, observableProps, props as allProps } from "../utils/api";
import init from "../utils/initZoom";
import { onMounted, ref, SetupContext, onUnmounted, watch } from "vue";

function initSpz(props: any, context: SetupContext, root: any) {
  if (root.value.children.length == 0) return;
  let svgId = props.viewportSelector;
  if (!svgId) {
    svgId = "svg_" + ((Math.random() * 100) | 0);
    root.value.children[0].id = svgId;
    svgId = "#" + svgId;
  }
  let exp = init(props, context.emit, svgId, nativeEmits);

  context.expose(exp);
  return exp;
}

export default {
  props: Object.assign(allProps, {
    showThumbnail: String,
  }),

  setup(props: any, context: SetupContext) {
    let root = ref();
    let exp: any = null;

    // initialize when the first time slot content is added
    let unwatch = watch(
      () => context.slots.default?.(),
      () => {
        if (exp) {
          unwatch();
          return;
        };
        exp = initSpz(props, context, root);
        unwatch();
      },
      {
        flush: "post",
      }
    );

    for (let k in observableProps) {
      watch(
        () => props[k],
        () => {
          if (!exp) return;
          observableProps[k](props[k], exp.spz);
        },
        {
          flush: "post",
        }
      );
    }

    onMounted(() => {
      console.log("Mounted");
      exp = initSpz(props, context, root);
    });

    onUnmounted(() => {
      if (exp) exp.spz.destroy();
    });

    return {
      root,
    };
  },
};
</script>

<style scoped>
</style>
