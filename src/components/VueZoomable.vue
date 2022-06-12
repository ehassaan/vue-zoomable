
<template>
    <div
        ref="container"
        class="container"
        @mousedown="mouse.onMouseDown"
        @dblclick="mouse.onDblClick"
        @touchstart="touch.onTouchStart"
        @wheel="wheel.onWheel"
    >
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { onMounted, watch } from 'vue';
import { useMouse } from "../composables/useMouse";
import { useTouch } from "../composables/useTouch";
import { useWheel } from "../composables/useWheel";

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
    initalPanX: {
        type: Number,
        default: 0
    },
    initalPanY: {
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
});
let container = ref();
let zoom = ref(props.minZoom);
if ((props.initialZoom >= props.minZoom) && (props.initialZoom <= props.maxZoom)) {
    zoom.value = props.initialZoom;
}

let pan = ref({
    x: props.initalPanX,
    y: props.initalPanY,
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
<style scoped>
.container {
    overflow: hidden;
}
</style>
