
<script setup lang="ts">
import { ref } from 'vue';

let props = defineProps({
    color: {
        type: String,
        default: "yellow"
    }
})

const theme = ref('red')
</script>

<template>
    <p class="myclass">hello</p>
</template>

<style scoped>
.myclass {
    color: v-bind("theme");
}
</style>