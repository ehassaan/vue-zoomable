<template>
  <div ref="container" class="container" :class="$style.container" @mousedown="mouse.onMouseDown"
    @dblclick="mouse.onDblClick" @touchstart="touch.onTouchStart" @wheel="wheel.onWheel">
    <slot />
    <ControllButtons v-if="props.enableControllButton" @button-home="button.onHome" @button-pan="button.onPan"
      @button-zoom="button.onZoom"></ControllButtons>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, PropType } from "vue";
import { onMounted, watch } from "vue";
import { useMouse } from "../composables/useMouse";
import { useTouch } from "../composables/useTouch";
import { useWheel } from "../composables/useWheel";
import { useButtons } from '../composables/useButtons';

import ControllButtons from './ControllButtons.vue';

let emitNative = defineEmits(["panned", "zoom", "update:zoom", "update:pan"]);
let props = defineProps({
  zoom: {
    type: Number,
    default: null,
  },
  pan: {
    type: Object as PropType<{ x: number, y: number }>,
    default: null,
  },
  selector: {
    type: String,
    default: "* > *"
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
    default: 0
  },
  initialPanY: {
    type: Number,
    default: 0
  },
  initialZoom: {
    type: Number,
    default: 0.5
  },
  dblClickZoomStep: {
    type: Number,
    default: 0.4,
  },
  wheelZoomStep: {
    type: Number,
    default: 0.05,
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
  }
});

let container = ref();
let zoom = ref(props.minZoom);
if ((props.initialZoom >= props.minZoom) && (props.initialZoom <= props.maxZoom)) {
  zoom.value = props.initialZoom;
}
if (props.zoom) zoom.value = props.zoom;

let pan = ref({
  x: props.pan != null ? props.pan.x : props.initialPanX,
  y: props.pan != null ? props.pan.y : props.initialPanY,
});


watch(() => props.zoom, () => {
  if (!isNaN(props.zoom)) {
    zoom.value = props.zoom;
  }
}
);

watch(() => props.pan, () => {
  if (props.pan) {
    pan.value = { ...props.pan };
  }
}
);

function emit(name: string, event: ZoomableEvent) {
  if (name === "zoom") {
    emitNative('update:zoom', event.zoom);
  }
  else if (name === "panned") {
    emitNative('update:pan', event.pan);
  }
  emitNative(name, event);
}

let transform = computed(() => {
  return `translate(${pan.value.x}px, ${pan.value.y}px) scale(${zoom.value})`;
});

let element: any = null;

function setTransform() {
  if (!element) {
    element = container.value?.querySelector(props.selector);
  }
  if (!element) return;
  element.style.transform = transform.value;
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

let mouse = useMouse(props, emit, pan, zoom);
let touch = useTouch(props, emit, pan, zoom);
let wheel = useWheel(props, emit, pan, zoom);
let button = useButtons(props, emit, pan, zoom);

</script>

<style module>
.container {
  overflow: hidden;
  position: relative;

  -webkit-user-select: none;  
  -moz-user-select: none;    
  -ms-user-select: none;      
  user-select: none;
}
</style>
