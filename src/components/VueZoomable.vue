
<template>
    <div ref="container" class="container" :class="$style.container" @mousedown="mouse.onMouseDown"
        @dblclick="mouse.onDblClick" @touchstart="touch.onTouchStart" @wheel="wheel.onWheel">
        <slot />

        <ControllButtons v-if="props.enableControllButton"></ControllButtons>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { onMounted, watch } from 'vue';
import { useMouse } from "../composables/useMouse";
import { useTouch } from "../composables/useTouch";
import { useWheel } from "../composables/useWheel";

import ControllButtons from './ControllButtons.vue';

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
    enableControllButton: {
        type: Boolean,
        default: false,
    },
    buttonPanStep: {
        type: Number,
        default: 0.1,
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
    setTransform();
});

let mouse = useMouse(props, emit, pan, zoom);
let touch = useTouch(props, emit, pan, zoom);
let wheel = useWheel(props, emit, pan, zoom);
</script>

<style module>
.container {
    overflow: hidden;

    position: relative;
}
</style>
