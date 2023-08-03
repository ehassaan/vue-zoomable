
<template>
    <div ref="container" class="container" :class="$style.container" @mousedown="mouse.onMouseDown"
        @dblclick="mouse.onDblClick" @touchstart="touch.onTouchStart" @wheel="wheel.onWheel" @mouseleave="onMouseLeave">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed, ref, Ref, createApp, provide } from 'vue';
import { onMounted, watch } from 'vue';
import { useMouse } from "../composables/useMouse";
import { useTouch } from "../composables/useTouch";
import { useWheel } from "../composables/useWheel";

import ScrollOverlay from './ScrollOverlay.vue';

const hideOverlay: Ref<boolean> = ref(false);

let emit = defineEmits(["panned", "zoom"]);
let props = defineProps({
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
    enableWheelOnKey: {
        type: String,
        default: undefined,
    }
});
let container = ref();
let zoom = ref(props.minZoom);
if ((props.initialZoom >= props.minZoom) && (props.initialZoom <= props.maxZoom)) {
    zoom.value = props.initialZoom;
}


let pan = ref({
    x: props.initialPanX,
    y: props.initialPanY,
});

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

watch(transform, () => {
    setTransform();
}, {
    flush: "post"
});

onMounted(() => {
    const placeholder = document.createElement('div');
    const scrollOverlayApp = createApp(ScrollOverlay, { enableWheelOnKey: props.enableWheelOnKey });

    // needs to be injected before it is mounted
    scrollOverlayApp.provide("hideOverlay", { hideOverlay });

    scrollOverlayApp.mount(placeholder)
    container.value.appendChild(placeholder);

    setTransform();
});


const pressedKeys: Ref<Set<String>> = ref(new Set());

// track the keys, which are currently pressed
document.addEventListener('keydown', (event) => { pressedKeys.value.add(event.key); });
document.addEventListener('keyup', (event) => { pressedKeys.value.delete(event.key); });

// track when the mouse leaves, to then hide the overlay
function onMouseLeave(event: MouseEvent) {
    hideOverlay.value = true;
}

let mouse = useMouse(props, emit, pan, zoom, pressedKeys);
let touch = useTouch(props, emit, pan, zoom, pressedKeys);
let wheel = useWheel(props, emit, pan, zoom, pressedKeys);

</script>
<style module>
.container {
    overflow: hidden;
    position: relative;
}
</style>
