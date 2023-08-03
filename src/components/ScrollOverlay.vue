<!-- 
    This is heavily inspired by:
    https://developers.google.com/maps/documentation/javascript/examples/control-default

    Thanks google <333
-->

<template>
    <div class="overlay" :class="{ hidden: hideOverlay }">
        <p>Use '{{ props.enableWheelOnKey }}' + 'scroll' to zoom</p>
    </div>
</template>

<script setup lang="ts">
import { inject, ref, Ref } from 'vue';

const props = defineProps({
    enableWheelOnKey: {
        type: String,
        default: undefined,
    }
})

interface Injection {
    hideOverlay: Ref<boolean>
    updateOverlay: (value: boolean) => void
}

const { hideOverlay } = inject<Injection>('hideOverlay') as Injection;
</script>

<style scoped>
.overlay {
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.45);
    pointer-events: none;

    opacity: 1;
    transition-duration: .3s;
}

.overlay.hidden {
    transition-duration: .8s;
    opacity: 0;
}

.overlay p {
    color: white;
    font-family: sans-serif;
    font-size: 22px;

    position: relative;
    margin: 0;
    top: 50%;
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);

    text-align: center;
}
</style>