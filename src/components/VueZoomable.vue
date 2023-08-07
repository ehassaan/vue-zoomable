<template>
  <div ref="container" class="container" :class="$style.container" @mousedown="onMouseDown" @dblclick="mouse.onDblClick"
    @touchstart="touch.onTouchStart" @wheel="wheel.onWheel" @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
    <ControllButtons v-if="props.enableControllButton" @button-home="button.onHome" @button-pan="button.onPan"
      @button-zoom="button.onZoom" @mousedown="updateHideOverlay(true);"></ControllButtons>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { eventNames } from 'process';
import { computed, ref, Ref, createApp, provide, onMounted, watch } from 'vue';
import { useMouse } from "../composables/useMouse";
import { useTouch } from "../composables/useTouch";
import { useWheel } from "../composables/useWheel";
import { useButtons } from "../composables/useButtons";
import ControllButtons from "./ControllButtons.vue";
import ScrollOverlay from './ScrollOverlay.vue';

const hideOverlay: Ref<boolean> = ref(true);

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
  },
  enableWheelOnKey: {
    type: String,
    default: undefined,
  }
});

let container = ref();
let zoom = ref(props.minZoom);
if (props.initialZoom >= props.minZoom && props.initialZoom <= props.maxZoom) {
  zoom.value = props.initialZoom;
}
if (props.zoom) zoom.value = props.zoom;

let pan = ref({
  x: props.pan != null ? props.pan.x : props.initialPanX,
  y: props.pan != null ? props.pan.y : props.initialPanY,
});

watch(
  () => props.zoom,
  () => {
    if (!isNaN(props.zoom)) {
      zoom.value = props.zoom;
    }
  }
);

watch(
  () => props.pan,
  () => {
    if (props.pan) {
      pan.value.x = props.pan.x;
      pan.value.x = props.pan.y;
    }
  }
);

function emit(name: string, event: ZoomableEvent) {
  if (name === "zoom") {
    emitNative("update:zoom", event.zoom);
  } else if (name === "panned") {
    emitNative("update:pan", event.pan);
  }
  emitNative(name as any, event);
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
  const placeholder = document.createElement('div');
  const scrollOverlayApp = createApp(ScrollOverlay, { enableWheelOnKey: props.enableWheelOnKey });

  // needs to be injected before it is mounted
  scrollOverlayApp.provide("hideOverlay", { hideOverlay });

  scrollOverlayApp.mount(placeholder)
  container.value.appendChild(placeholder);

  setTransform();
});


const pressedKeys: Ref<Set<String>> = ref(new Set<String>());

onMounted(() => {
  window.addEventListener(
    'wheel',
    event => {
      if (!isInContainer.value || props.enableWheelOnKey !== "Control") return;
      if (event.ctrlKey) event.preventDefault();
    }, { passive: false },
  );

  // track the keys, which are currently pressed
  document.addEventListener('keydown', (event) => {
    pressedKeys.value.add(event.key);
    if (event.key === props.enableWheelOnKey) hideOverlay.value = true;
  });
  document.addEventListener('keyup', (event) => { pressedKeys.value.delete(event.key); });
})

// track if the mouse is in the container
const isInContainer = ref(false);

// track when the mouse leaves, to then hide the overlay
function onMouseEnter() {
  isInContainer.value = true;
}
function onMouseLeave() {
  hideOverlay.value = true;
  isInContainer.value = false;
}

function showOverlay() { hideOverlay.value = false; }
function updateHideOverlay(newHideOverlay: boolean) { hideOverlay.value = newHideOverlay; }

let mouse = useMouse(props, emit, pan, zoom, updateHideOverlay);
let touch = useTouch(props, emit, pan, zoom, updateHideOverlay);
let wheel = useWheel(props, emit, pan, zoom, pressedKeys, updateHideOverlay);
let button = useButtons(props, emit, pan, zoom, updateHideOverlay);

function onMouseDown(event: MouseEvent) {
  updateHideOverlay(true);
  mouse.onMouseDown(event);
}
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
