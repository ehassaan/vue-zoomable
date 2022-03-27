# vue-zoomable

Tiny and high performance zoom and pan library for Vue 3. It uses CSS Transforms which provides hardware acceleration.

**Note:** Starting from 1.0, vue-zoomable does not use svg-pan-zoom as a dependency. It is created from scratch to use CSS Transforms for better performance and reactivity.

## Installation

`npm install vue-zoomable`

## Usage

Immediate child of VueZoomable must be either svg or an html container.

```vue
<template>
  <VueZoomable
    style="width: 500px; height: 500px; border: 1px solid black"
    selector="#myContent"
    :svgChild="true"
    :minZoom="0.5"
    :maxZoom="3"
  >
    <svg>
      <g id="myContent">
        <circle x="10" y="10" r="50" />
      </g>
    </svg>
  </VueZoomable>
</template>

<script setup lang="ts">
import VueZoomable from "vue-zoomable";
</script>
```

### Props

All props other than `selector` are observable and can be changed after initialization.

| Name             | type    | default | Description                                                                     |
| ---------------- | ------- | ------- | ------------------------------------------------------------------------------- |
| selector         | string  | `* > *` | Root element to apply transform on. Preferrably an `id` on `<div>` or `<g>` tag |
| maxZoom          | number  | 3       | Maximum allowed zoom                                                            |
| minZoom          | number  | 0.5     | Minimum allowed zoom                                                            |
| dblClickZoomStep | number  | 0.4     | Step size for zoom on double click                                              |
| wheelZoomStep    | number  | 0.05    | Step size for zoom on wheel                                                     |
| panEnabled       | boolean | true    | Enable panning                                                                  |
| zoomEnabled      | boolean | true    | Enable zoom                                                                     |
| mouseEnabled     | boolean | true    | Enable mouse events                                                             |
| touchEnabled     | boolean | true    | Enable touch events                                                             |
| dblClickEnabled  | boolean | true    | Zoom on double click enabled                                                    |
| wheelEnabled     | boolean | true    | Zoom on mouse enabled                                                           |

### Events

- panned
- zoom

All events have argument of type `ZoomableEvent`.

### ZoomableEvent

| Field | Type   | Description                                                                     |
| ----- | ------ | ------------------------------------------------------------------------------- |
| zoom  | number | Current zoom value                                                              |
| pan   | object | Current pan value and delta change in case of `panned` event.                   |
| type  | string | Source type which triggered the event. `dblClick`, `mouse`, `touch` or `wheel`. |

_Sample event data:_

```json
{
  "zoom": 0.3,
  "pan": {
    "x": 100,
    "y": 2,
    "deltaX": 0,
    "deltaY": 2
  },
  "type": "mouse"
}
```

## Acknowledgements

- [@panzoom/panzoom](https://github.com/timmywil/panzoom)
- [vue-svg-pan-zoom](https://www.npmjs.com/package/vue-svg-pan-zoom)
