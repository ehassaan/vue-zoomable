<!-- 
    This is inspired by:
    https://developers.google.com/maps/documentation/javascript/examples/control-default
-->

<template>
    <div ref="container" class="container" @wheel.capture="onWheel" @pointerdown="onPointerDown"
        @touchstart="onTouchStart">
        <slot :disableInteraction="visibility">
        </slot>
        <slot name="overlay" class="">
            <div :class="['overlay', { hidden: !visibility }]">
                <p v-if="isTouch">Use two fingers to pan</p>
                <p v-else>Use '{{ props.wheelUnlockKey }}' + 'scroll' to zoom</p>
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


const props = defineProps({
    enableTouchLock: {
        type: Boolean,
        default: true
    },
    enableWheelLock: {
        type: Boolean,
        default: true
    },
    wheelUnlockKey: {
        type: String,
        default: "Control"
    }
});

const visibility = ref(false);
const keysPressed = ref(new Set());
const isTouch = ref(false);
const container = ref();
let parent: any = null;


onMounted(() => {
    document.addEventListener("keydown", onButtonDown);
    document.addEventListener("keyup", onButtonUp);
    document.addEventListener("touchend", onTouchEnd);
    parent = container.value?.querySelector("#v-zoomable-control-btns");
});

function onWheel(ev: WheelEvent) {
    // console.log("wheel: ", ev);
    if (keysPressed.value.has(props.wheelUnlockKey)) {
        ev.preventDefault();
        return;
    }
    isTouch.value = false;
    visibility.value = true;
    setTimeout(() => {
        visibility.value = false;
    }, 1000);

    ev.stopImmediatePropagation();
}

function onTouchStart(ev: TouchEvent) {
    // console.log("touch-start: ", ev);
    if (parent && parent.contains(ev.target)) {
        ev.preventDefault();
        return;
    }
    isTouch.value = true;
    visibility.value = ev.touches.length < 2;
    if (!visibility.value) {
        ev.preventDefault();
    }
}

function onTouchEnd(ev: TouchEvent) {
    if (ev.touches.length > 0) return;
    visibility.value = false;
}

function onPointerDown(ev: PointerEvent) {
    console.log("pointer-down: ", ev);
    if (parent && parent.contains(ev.target)) {
        ev.preventDefault();
        return;
    }
    if (ev.pointerType === "mouse") {
        isTouch.value = false;
    }
}

function onButtonDown(ev: KeyboardEvent) {
    keysPressed.value.add(ev.key);
    if (keysPressed.value.has(props.wheelUnlockKey)) {
        visibility.value = false;
    }
}

function onButtonUp(ev: KeyboardEvent) {
    keysPressed.value.delete(ev.key);
}

</script>

<style scoped>
.container {
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    background: rgba(0, 0, 0, 0.45);
    opacity: 1;
    transition: all 0.8s;
    transition-behavior: allow-discrete;
}

.overlay.hidden {
    opacity: 0;
    display: none;
    transition: all 1.2s;
    transition-behavior: allow-discrete;
}

.overlay p {
    display: block;
    opacity: 1;
    transition: opacity 0.8s;
    color: white;
    font-family: sans-serif;
    font-size: 22px;
    user-select: none;
    position: relative;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
}
</style>
