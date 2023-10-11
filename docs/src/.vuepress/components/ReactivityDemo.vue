
<template>
  <section v-if="documentFlow">
    <h1>Chapter 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ultrices mi, nec cursus justo. Ut efficitur, dui
      nec consectetur consequat, lorem elit tincidunt metus, vel ultrices elit velit ac lectus. Proin in eros non nisi
      venenatis bibendum. Integer nec neque sit amet velit varius tempus. Integer viverra ligula nec nunc egestas, non
      ullamcorper mauris venenatis. Nullam sit amet pharetra odio, eget ultrices enim. Aenean non nisl auctor, vulputate
      quam sit amet, tincidunt lectus. Duis vitae elit sed justo tincidunt sodales id ac est. Vivamus eu orci dapibus,
      hendrerit nulla in, vehicula libero.
    </p>
    <p>
      Sed pulvinar bibendum metus, quis lacinia urna varius non. Duis eget velit quam. Vestibulum consectetur vehicula
      facilisis. Nunc egestas et enim ut facilisis. In volutpat augue eget risus faucibus malesuada. Ut et quam elit.
      Fusce quis tincidunt elit. Nullam gravida justo ut feugiat mollis.
    </p>
    <h2>Section 1.1</h2>
    <p>
      Vivamus maximus scelerisque ligula, vel fringilla odio consectetur nec. Duis eleifend, erat quis maximus ultrices,
      elit arcu congue nibh, nec elementum eros purus nec nulla. Fusce aliquet lacus id ligula rhoncus, in sodales lectus
      fringilla. Maecenas et purus et erat pulvinar interdum vel sit amet quam. Vestibulum facilisis turpis nec metus
      congue posuere.
    </p>
    <h2>Section 1.2</h2>
    <p>
      Nulla vehicula lectus felis, in feugiat massa dignissim id. Vivamus eget magna ac eros viverra mattis ac sit amet
      nulla. Pellentesque venenatis risus ut ex suscipit, in auctor nulla consequat. Proin rhoncus semper risus, a dapibus
      turpis luctus a. Nullam nec tincidunt sapien. Vivamus gravida ultricies lacus, in eleifend nunc cursus ut. In hac
      habitasse platea dictumst. Duis ut purus nec sapien convallis pellentesque vel eu erat.
    </p>
  </section>

  <form>
    <div>
      <input type="checkbox" v-model="zoomEnabled" />
      <label>zoomEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="zoomEnabled" />
      <label>zoomEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="dblClickEnabled" />
      <label>dblClickEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="touchEnabled" />
      <label>touchEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="mouseWheelZoomEnabled" />
      <label>mouseWheelZoomEnabled</label>
    </div>
    <div>
      <input type="checkbox" v-model="visible" />
      <label>Slot Content</label>
    </div>
    <div>
      <input type="checkbox" v-model="documentFlow" />
      <label>DocumentFlow</label>
    </div>
    <div>
      <input type="checkbox" v-model="enableControllButton" />
      <label>Controll Button Enabled</label>
    </div>
    <div>
      <label>Pan X</label>
      <input type="number" v-model="pan.x">
    </div>
    <div>
      <label>Pan Y</label>
      <input type="number" v-model="pan.y">
    </div>
    <div>
      <label>Zoom</label>
      <input type="number" v-model="zoom">
    </div>
    <div>
      <label>Slot Content Type</label>
      <select v-model="slotContentType">
        <option value="html">HTML</option>
        <option value="svg">SVG</option>
      </select>
    </div>
    <div>
      <label>Selector</label>
      <input type="text" v-model="selector">
    </div>
  </form>

  <div v-if="slotContentType === 'svg'">
    <VueZoomable style="width: 500px; height: 500px; border: 1px solid black" :selector="selector"
      :zoomEnabled="zoomEnabled" :panEnabled="panEnabled" :initialPanX="100" :initialPanY="120" :initialZoom="1.5"
      :svgChild="true" :dblClickEnabled="dblClickEnabled" :wheelEnabled="mouseWheelZoomEnabled"
      :touchEnabled="touchEnabled" :minZoom="0.3" :maxZoom="2" :dblClickZoomStep="0.4" :wheelZoomStep="0.01"
      v-model:pan="pan" v-model:zoom="zoom" :enableWheelOnKey="documentFlow ? 'Control' : undefined"
      :enableControllButton="enableControllButton" @zoom="showEvent" @panned="showEvent">
      <svg class="mysvg" v-if="visible">
        <g id="zoomable-content">
          <circle x="10" y="10" r="50" />
        </g>
      </svg>
    </VueZoomable>
  </div>
  <div v-else>
    <VueZoomable style="width: 500px; height: 500px; border: 1px solid black" :selector="selector"
      :zoomEnabled="zoomEnabled" :panEnabled="panEnabled" :initialPanX="100" :initialPanY="120" :initialZoom="1.5"
      :dblClickEnabled="dblClickEnabled" :wheelEnabled="mouseWheelZoomEnabled" :touchEnabled="touchEnabled" :minZoom="0.3"
      :maxZoom="2" :dblClickZoomStep="0.4" :wheelZoomStep="0.01" v-model:pan="pan" v-model:zoom="zoom"
      :enableWheelOnKey="documentFlow ? 'Control' : undefined" :enableControllButton="enableControllButton"
      @zoom="showEvent" @panned="showEvent">
      <div id="zoomable-content">
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </VueZoomable>
  </div>

  <div>
    zoom: {{ zoom }}
  </div>
  <div>
    pan: {{ pan }}
  </div>

  <section v-if="documentFlow">
    <h1>Chapter 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ultrices mi, nec cursus justo. Ut efficitur, dui
      nec consectetur consequat, lorem elit tincidunt metus, vel ultrices elit velit ac lectus. Proin in eros non nisi
      venenatis bibendum. Integer nec neque sit amet velit varius tempus. Integer viverra ligula nec nunc egestas, non
      ullamcorper mauris venenatis. Nullam sit amet pharetra odio, eget ultrices enim. Aenean non nisl auctor, vulputate
      quam sit amet, tincidunt lectus. Duis vitae elit sed justo tincidunt sodales id ac est. Vivamus eu orci dapibus,
      hendrerit nulla in, vehicula libero.
    </p>
    <p>
      Sed pulvinar bibendum metus, quis lacinia urna varius non. Duis eget velit quam. Vestibulum consectetur vehicula
      facilisis. Nunc egestas et enim ut facilisis. In volutpat augue eget risus faucibus malesuada. Ut et quam elit.
      Fusce quis tincidunt elit. Nullam gravida justo ut feugiat mollis.
    </p>
    <h2>Section 1.1</h2>
    <p>
      Vivamus maximus scelerisque ligula, vel fringilla odio consectetur nec. Duis eleifend, erat quis maximus ultrices,
      elit arcu congue nibh, nec elementum eros purus nec nulla. Fusce aliquet lacus id ligula rhoncus, in sodales lectus
      fringilla. Maecenas et purus et erat pulvinar interdum vel sit amet quam. Vestibulum facilisis turpis nec metus
      congue posuere.
    </p>
    <h2>Section 1.2</h2>
    <p>
      Nulla vehicula lectus felis, in feugiat massa dignissim id. Vivamus eget magna ac eros viverra mattis ac sit amet
      nulla. Pellentesque venenatis risus ut ex suscipit, in auctor nulla consequat. Proin rhoncus semper risus, a dapibus
      turpis luctus a. Nullam nec tincidunt sapien. Vivamus gravida ultricies lacus, in eleifend nunc cursus ut. In hac
      habitasse platea dictumst. Duis ut purus nec sapien convallis pellentesque vel eu erat.
    </p>
    <!-- Continue with more paragraphs, sections, and chapters as needed to fill a couple of pages -->

    <h1>Chapter 2</h1>
    <p>
      Phasellus blandit velit at eros efficitur, in mollis dui feugiat. Fusce euismod mauris nec varius volutpat. Quisque
      dapibus augue et ex ultricies, ac vestibulum dolor facilisis. Sed mattis est sed ipsum feugiat, ut blandit nunc
      tristique. Aliquam et volutpat nulla, vel ullamcorper purus. Proin condimentum lacus ac congue varius. Maecenas a
      cursus elit. Nulla facilisi. Integer eu quam eget arcu laoreet vehicula.
    </p>
    <h2>Section 2.1</h2>
    <p>
      Nunc rhoncus, risus nec euismod porttitor, urna nisi accumsan turpis, vitae euismod turpis arcu eget velit. Nulla a
      elit vel enim accumsan egestas. Nulla facilisi. Duis nec magna risus. Etiam euismod hendrerit dolor. Integer vel est
      vitae purus auctor vehicula. Vivamus feugiat felis id tortor hendrerit blandit. Nullam nec tortor eu neque tincidunt
      mollis. Aenean tincidunt sit amet lacus eu suscipit. Fusce vitae nulla ultrices, convallis odio non, accumsan justo.
    </p>
    <h2>Section 2.2</h2>
    <p>
      Aenean in nibh eget velit aliquet iaculis. Donec et purus ut lectus hendrerit efficitur. Maecenas vulputate justo
      nec enim ullamcorper luctus. Integer varius nisi eu massa iaculis, vel auctor erat blandit. Nulla facilisi. Praesent
      eget bibendum lectus. Donec dignissim velit id nisl feugiat, a vestibulum felis consequat. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </p>
    <!-- Continue with more paragraphs, sections, and chapters as needed to fill a couple of pages -->
    <h1>Chapter 1</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ultrices mi, nec cursus justo. Ut efficitur, dui
      nec consectetur consequat, lorem elit tincidunt metus, vel ultrices elit velit ac lectus. Proin in eros non nisi
      venenatis bibendum. Integer nec neque sit amet velit varius tempus. Integer viverra ligula nec nunc egestas, non
      ullamcorper mauris venenatis. Nullam sit amet pharetra odio, eget ultrices enim. Aenean non nisl auctor, vulputate
      quam sit amet, tincidunt lectus. Duis vitae elit sed justo tincidunt sodales id ac est. Vivamus eu orci dapibus,
      hendrerit nulla in, vehicula libero.
    </p>
    <p>
      Sed pulvinar bibendum metus, quis lacinia urna varius non. Duis eget velit quam. Vestibulum consectetur vehicula
      facilisis. Nunc egestas et enim ut facilisis. In volutpat augue eget risus faucibus malesuada. Ut et quam elit.
      Fusce quis tincidunt elit. Nullam gravida justo ut feugiat mollis.
    </p>
    <h2>Section 1.1</h2>
    <p>
      Vivamus maximus scelerisque ligula, vel fringilla odio consectetur nec. Duis eleifend, erat quis maximus ultrices,
      elit arcu congue nibh, nec elementum eros purus nec nulla. Fusce aliquet lacus id ligula rhoncus, in sodales lectus
      fringilla. Maecenas et purus et erat pulvinar interdum vel sit amet quam. Vestibulum facilisis turpis nec metus
      congue posuere.
    </p>
    <h2>Section 1.2</h2>
    <p>
      Nulla vehicula lectus felis, in feugiat massa dignissim id. Vivamus eget magna ac eros viverra mattis ac sit amet
      nulla. Pellentesque venenatis risus ut ex suscipit, in auctor nulla consequat. Proin rhoncus semper risus, a dapibus
      turpis luctus a. Nullam nec tincidunt sapien. Vivamus gravida ultricies lacus, in eleifend nunc cursus ut. In hac
      habitasse platea dictumst. Duis ut purus nec sapien convallis pellentesque vel eu erat.
    </p>
    <!-- Continue with more paragraphs, sections, and chapters as needed to fill a couple of pages -->

    <h1>Chapter 2</h1>
    <p>
      Phasellus blandit velit at eros efficitur, in mollis dui feugiat. Fusce euismod mauris nec varius volutpat. Quisque
      dapibus augue et ex ultricies, ac vestibulum dolor facilisis. Sed mattis est sed ipsum feugiat, ut blandit nunc
      tristique. Aliquam et volutpat nulla, vel ullamcorper purus. Proin condimentum lacus ac congue varius. Maecenas a
      cursus elit. Nulla facilisi. Integer eu quam eget arcu laoreet vehicula.
    </p>
    <h2>Section 2.1</h2>
    <p>
      Nunc rhoncus, risus nec euismod porttitor, urna nisi accumsan turpis, vitae euismod turpis arcu eget velit. Nulla a
      elit vel enim accumsan egestas. Nulla facilisi. Duis nec magna risus. Etiam euismod hendrerit dolor. Integer vel est
      vitae purus auctor vehicula. Vivamus feugiat felis id tortor hendrerit blandit. Nullam nec tortor eu neque tincidunt
      mollis. Aenean tincidunt sit amet lacus eu suscipit. Fusce vitae nulla ultrices, convallis odio non, accumsan justo.
    </p>
    <h2>Section 2.2</h2>
    <p>
      Aenean in nibh eget velit aliquet iaculis. Donec et purus ut lectus hendrerit efficitur. Maecenas vulputate justo
      nec enim ullamcorper luctus. Integer varius nisi eu massa iaculis, vel auctor erat blandit. Nulla facilisi. Praesent
      eget bibendum lectus. Donec dignissim velit id nisl feugiat, a vestibulum felis consequat. Pellentesque habitant
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.
    </p>
    <!-- Continue with more paragraphs, sections, and chapters as needed to fill a couple of pages -->
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "vue-zoomable/dist/style.css";
import VueZoomable from "vue-zoomable";

const zoom = ref(0.5);
const pan = ref({ x: 0, y: 0 });
const slotContentType = ref("html");
const selector = ref("#zoomable-content");

function showEvent(ev: any) {
  console.log(ev)
  // zoom.value = ev.zoom;
  // pan.value = {
  //   x: ev.pan.x,
  //   y: ev.pan.y,
  // };
}

let zoomEnabled = ref(true);
let panEnabled = ref(true);
let dblClickEnabled = ref(true);
let touchEnabled = ref(true);
let mouseWheelZoomEnabled = ref(true);
let visible = ref(true);
let documentFlow = ref(true)
let enableControllButton = ref(true);
</script>

<style>
.mysvg {
  height: 100%;
  width: 100%;
}

#zoomable-content {
  display: flex;
  flex-direction: column;
}

#zoomable-content>div {
  display: flex;
  flex-direction: row;
}

#zoomable-content>div>div {
  margin: 50px;
  background-color: blue;
  height: 100px;
  width: 100px;
}
</style>
