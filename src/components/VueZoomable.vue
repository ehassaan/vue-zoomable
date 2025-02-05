<template>
  <div ref="container" :class="$style.container" @dblclick="zoomable.onDblClick" @pointerdown="zoomable.onPointerDown"
    @wheel="zoomable.onWheel" @touchstart="zoomable.onTouchStart">

    <slot></slot>

    <slot name="buttons">
      <ControlButtons v-if="props.enableControlButton" @buttondown="zoomable.onButtonDown"
        @buttonup="zoomable.onButtonUp">
      </ControlButtons>
    </slot>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch, PropType } from 'vue';
import ControlButtons from "./ControlButtons.vue";
import { useZoomable } from '../composables/zoomable';
import type { ZoomableEvent } from '../entities/ZoomableEvent';


let emit = defineEmits(["panned", "zoom", "update:zoom", "update:pan"]);
let props = defineProps({
  zoom: {
    type: Number,
    default: null,
  },
  pan: {
    type: Object,
    default: null,
  },
  selector: {
    type: String,
    default: "* > *",
  },
  maxZoom: {
    type: Number,
    default: 3,
  },
  minZoom: {
    type: Number,
    default: 0.5,
  },
  initialPanX: {
    type: Number,
    default: 0,
  },
  initialPanY: {
    type: Number,
    default: 0,
  },
  initialZoom: {
    type: Number,
    default: 0.5,
  },
  dblClickZoomStep: {
    type: Number,
    default: 0.4,
  },
  wheelZoomStep: {
    type: Number,
    default: 0.4,
  },
  panEnabled: {
    type: Boolean,
    default: true,
  },
  zoomEnabled: {
    type: Boolean,
    default: true,
  },
  mouseEnabled: {
    type: Boolean,
    default: true,
  },
  touchEnabled: {
    type: Boolean,
    default: true,
  },
  dblClickEnabled: {
    type: Boolean,
    default: true,
  },
  wheelEnabled: {
    type: Boolean,
    default: true,
  },
  enableControlButton: {
    type: Boolean,
    default: true,
  },
  buttonPanStep: {
    type: Number,
    default: 15,
  },
  buttonZoomStep: {
    type: Number,
    default: 0.1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  zoomOrigin: {
    type: String as PropType<'content-center' | 'pointer'>,
    default: 'pointer',
  }
});

let container = ref();
let transformTarget = computed<HTMLElement>(() => container.value?.querySelector(props.selector));
let zoomable = useZoomable({ props, onChange, container, target: transformTarget });


function onChange(name: string, event: ZoomableEvent) {
  if (name === "zoom") {
    emit("update:zoom", event.zoom);
  } else if (name === "panned") {
    emit("update:pan", event.pan);
  }
  emit(name as any, event);
}

let transform = computed(() => {
  return `translate(${zoomable.pan.value.x}px, ${zoomable.pan.value.y}px) scale(${zoomable.zoom.value})`;
});

function setTransform() {
  if (!transformTarget.value) return;
  transformTarget.value.style.transform = transform.value;
  transformTarget.value.style.transformOrigin = 'center center';
  transformTarget.value.style.transition = "transform 0.07s ease-out";
  transformTarget.value.style.transformBox = "fill-box";
}

watch(
  transform,
  () => {
    setTransform();
  },
  {
    flush: "post",
  }
);

onMounted(() => {
  setTransform();
});

</script>

<style scoped module>
.container {
  overflow: hidden;
  position: relative;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttons {
  z-index: 100;
}
</style>
