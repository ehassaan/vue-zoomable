
<template>
    <h1 class="heading">asdasd</h1>
    <div
        class="container"
        @mousedown="mouse.onMouseDown"
        @mousemove="mouse.onMouseMove"
        @dblclick="mouse.onDblClick"
        @touchstart="touch.onTouchStart"
        @touchmove="touch.onTouchMove"
        @wheel="wheel.onWheel"
    >
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from '@vue/reactivity';
import { useMouse } from "../composables/useMouse";
import { useTouch } from "../composables/useTouch";
import { useWheel } from "../composables/useWheel";

let emit = defineEmits(["panned", "zoom"]);
let props = defineProps({
    maxZoom: {
        type: Number,
        default: 3,
    },
    minZoom: {
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
});

let zoom = ref(props.minZoom);
let pan = ref({
    x: 100,
    y: 0,
})

let transform = computed(() => {
    return `translate(${pan.value.x}px, ${pan.value.y}px) scale(${zoom.value})`;
});

let mouse = useMouse(props, emit, pan, zoom);
let touch = useTouch(props, emit, pan, zoom);
let wheel = useWheel(props, emit, pan, zoom);

</script>
<style scoped>
.container {
    overflow: hidden;
}
:slotted(.container > * > *) {
    height: auto;
    transform: v-bind("transform");
}
</style>
