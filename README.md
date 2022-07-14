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
import "vue-zoomable/dist/style.css";
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
| initialZoom      | number  | 0.5     | Initial zoom value                                                              |
| initialPanX      | number  | 0       | Initial pan along x-axis                                                        |
| initialPanY      | number  | 0       | Initial pan along y-axis                                                        |

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

## Contribute

Contributions are most welcome. Please follow the below steps for any contributions.

### If you add new feature

- Open a suggestion issue first.
- Provide your reasoning on why you want to add this feature.
- Submit your PR.

### If you fix a bug

- If you are resolving an issue, please add `fix: #<issue number> <short message>` in your PR title (e.g.fix: #3899 update entities encoding/decoding).
- Provide a description of the bug in your PR and/or link to the issue.

### Where should I start?

A good way to start is to find an issue labeled as bug, help wanted or feature request and suggest your approach in comments.

Other ways to help:

- Write tests
- Documentation & Demos
- Share your thoughts! Any features you thing vue-zoomable is missing? Any suggestions? Would love to hear that.

## Acknowledgements

- [@panzoom/panzoom](https://github.com/timmywil/panzoom)
