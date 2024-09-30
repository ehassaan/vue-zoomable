<template>
  <div ref="container" class="container" :class="$style.container" @dblclick="zoomable.onDblClick"
    @pointerdown="panable.onPointerDown" @wheel="zoomable.onWheel" @pointerenter="onPointerEnter"
    @pointerleave="onPointerLeave">

    <ControllButtons v-if="props.enableControllButton" @home="panable.onHome" @pandown="panable.onPanButtonDown"
      @panup="panable.onPanButtonUp" @zoomdown="zoomable.onZoomButtonDown" @zoomup="zoomable.onZoomButtonUp">
    </ControllButtons>
    <slot></slot>

    <ScrollOverlay :enable-wheel-on-key="props.enableWheelOnKey" :overlay="panable.overlay.value && isInContainer">
    </ScrollOverlay>

  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { usePan } from "../composables/pan";
import { useZoom } from "../composables/zoom";
import ControllButtons from "./ControlButtons.vue";
import ScrollOverlay from './ScrollOverlay.vue';

let emitNative = defineEmits(["panned", "zoom", "update:zoom", "update:pan"]);
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
  enableControllButton: {
    type: Boolean,
    default: false,
  },
  buttonPanStep: {
    type: Number,
    default: 15,
  },
  buttonZoomStep: {
    type: Number,
    default: 0.1,
  },
  enableWheelOnKey: {
    type: String,
    default: undefined,
  }
});

let container = ref();
let transformTarget = computed<HTMLElement>(() => container.value?.querySelector(props.selector));
let panable = usePan(props, emit);
let zoomable = useZoom(props, emit);


function emit(name: string, event: ZoomableEvent) {
  if (name === "zoom") {
    emitNative("update:zoom", event.zoom);
  } else if (name === "panned") {
    emitNative("update:pan", event.pan);
  }
  emitNative(name as any, event);
}

let transform = computed(() => {
  return `translate(${panable.pan.value.x}px, ${panable.pan.value.y}px) scale(${zoomable.zoom.value})`;
});

function setTransform() {
  if (!transformTarget.value) return;
  transformTarget.value.style.transform = transform.value;
  transformTarget.value.style.transition = "transform 0.06s ease-out";
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

// track if the mouse is in the container
const isInContainer = ref(false);

// track when the mouse leaves, to then hide the overlay
function onPointerEnter(ev: PointerEvent) {
  if (ev.pointerType === "touch") return;  // dont show overlay for touch
  isInContainer.value = true;
}
function onPointerLeave() {
  isInContainer.value = false;
  panable.overlay.value = true;
}

</script>

<style module>
.container {
  overflow: hidden;
  position: relative;
  touch-action: none;

  transition: transform 0.1s ease-out;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
