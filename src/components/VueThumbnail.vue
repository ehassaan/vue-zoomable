<template>
  <div v-on:wheel="zoomMain">
    <VueZoomableSvg
      class="thumbnail"
      :zoomEnabled="false"
      :panEnabled="false"
      :controlIconsEnabled="false"
      :dblClickZoomEnabled="false"
      :showThumbnail="false"
      :preventMouseEventsDefault="true"
      v-on:svgpanzoom="thumbnailSPZcreated"
    >
      <slot class="thumbnail" />
    </VueZoomableSvg>
    <Scope :bus="bus" :mainSPZ="mainSPZ" :thumbnailSPZ="thumbnailSPZ" />
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Scope from "./Scope.vue";
import VueZoomableSvg from "./VueZoomableSvg.vue";

let props = defineProps(["mainSPZ"]);
let emit = defineEmits(["onThumbnailShown"]);

let thumbnailSPZ = ref(null);

onMounted(() => {
  emit("onThumbnailShown");
});

function thumbnailSPZcreated(spz) {
  thumbnailSPZ = spz;
  emit("thumbnailCreated", spz);
}
function zoomMain(evt) {
  mainSPZ[evt.deltaY < 0 ? "zoomIn" : "zoomOut"]();
}



// export default {
//   components: { Scope },
//   props: ["onThumbnailShown", "mainSPZ", "bus"],
// //   data: () => ({ thumbnailSPZ: null }),
// //   beforeCreate: function () {
// //     // this.$options.components.SPZ = require("./SvgPanZoom.vue").default;
// //   },
//   methods: {
//     zoomMain(evt) {
//       this.mainSPZ[event.deltaY < 0 ? "zoomIn" : "zoomOut"]();
//     },
//     ,
//   },
//   mounted() {
//     if (this.onThumbnailShown) {
//       this.onThumbnailShown();
//     }
//   },
// };
</script>


<style>
.thumbView {
  z-index: 110;
  background: white;
}
.thumbnail {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 20%;
  height: 30%;
  margin: 3px;
  padding: 3px;
  overflow: hidden;
  z-index: 120;
}
.thumbnail svg {
  width: 100% !important;
  height: 100% !important;
}
</style>