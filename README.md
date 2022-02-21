# vue-zoomable

Simple Vue 3 wrapper on svg-pan-zoom.js library written using composition API with Typescript support.

## Installation

`npm install vue-zoomable`

## Usage

```vue
<template>
  <VueZoomableSvg
    style="width: 500px; height: 500px; border: 1px solid black"
    :zoomEnabled="true"
    :controlIconsEnabled="true"
    :fit="false"
    :center="true"
  >
    <svg>
      <circle x="10" y="10" r="50" />
    </svg>
  </VueZoomableSvg>
</template>

<script setup lang="ts">
import VueZoomableSvg from "vue-zoomable";
</script>
```

Currently the `vue-zoomable` only works with a `svg` child -- `embed` won't work.

### Props

| attribute                 | default                    | Observable |
| ------------------------- | -------------------------- | ---------- |
| zoomEnabled               | `true`                     | yes        |
| controlIconsEnabled       | `false`                    | yes        |
| fit                       | `true`                     | no         |
| panEnabled                | `true`                     | yes        |
| dblClickZoomEnabled       | `true`                     | yes        |
| mouseWheelZoomEnabled     | `true`                     | yes        |
| preventMouseEventsDefault | `true`                     | no         |
| contain                   | `false`                    | no         |
| center                    | `true`                     | no         |
| viewportSelector          | `null` (Selects child svg) | no         |
| zoomScaleSensitivity      | `0.2`                      | no         |
| minZoom                   | `0.5`                      | no         |
| maxZoom                   | `10`                       | no         |
| refreshRate               | `auto`                     | no         |

### Events

- beforeZoom
- onZoom
- beforePan
- onPan
- onUpdatedCTM
- svgpanzoom

### Prevent Default Behaviour

```vue
<template>
  <VueZoomableSvg @beforePan="beforePan"> .... </VueZoomableSvg>
</template>

<script setup lang="ts">
let beforePan = (ev: any) => {
  ev.preventDefault(); // prevents panning
};
</script>
```

### svgpanzoom object

To access the created `svgpanzoom` javascript object, you can
listen to the `svgpanzoom` event on the `SvgPanZoom` component.

```vue
<template>
  <VueZoomableSvg
    style="width: 500px; height: 500px; border: 1px solid black"
    @svgpanzoom="svgpanzoom"
  >
    <svg>
      <circle x="10" y="10" r="50" />
    </svg>
  </VueZoomableSvg>
</template>

<script setup lang="ts">
import VueZoomableSvg from "vue-zoomable";
let svgpanzoom = (ev: any) => {
  console.log(ev);
};
</script>
```

## Acknowledgements

- [vue-svg-pan-zoom](https://www.npmjs.com/package/vue-svg-pan-zoom)
