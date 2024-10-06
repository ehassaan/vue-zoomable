# Introduction

Tiny and high performance zoom and pan library for Vue 3. It uses CSS Transforms which provides hardware acceleration.

Checkout the [demos](https://hassaanakbar.github.io/vue-zoomable/demos/).

## Features

- Simply wrap your content in VueZoomable component to make it zoom-able and pan-able.
- Mouse wheel support
- Touch and pinch-zoom support
- Control buttons for zoom and pan
- Supports SVG and HTML content
- Uses CSS transform for zoom and pan
- `ScrollOverlay` component to lock pan/zoom while scrolling

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

# API Reference
## VueZoomable
### Props

| Name                | type    | default | Description                                                                     |
| ------------------- | ------- | ------- | ------------------------------------------------------------------------------- |
| selector            | string  | `* > *` | Root element to apply transform on. Preferrably an `id` on `<div>` or `<g>` tag |
| maxZoom             | number  | 3       | Maximum allowed zoom                                                            |
| minZoom             | number  | 0.5     | Minimum allowed zoom                                                            |
| dblClickZoomStep    | number  | 0.4     | Step size for zoom on double click                                              |
| wheelZoomStep       | number  | 0.2     | Step size for zoom on wheel                                                     |
| panEnabled          | boolean | true    | Enable panning                                                                  |
| zoomEnabled         | boolean | true    | Enable zoom                                                                     |
| mouseEnabled        | boolean | true    | Enable mouse events                                                             |
| touchEnabled        | boolean | true    | Enable touch events                                                             |
| dblClickEnabled     | boolean | true    | Zoom on double click enabled                                                    |
| wheelEnabled        | boolean | true    | Zoom on mouse enabled                                                           |
| initialZoom         | number  | 0.5     | (Deprecated) Initial zoom value. Use v-model:zoom                               |
| initialPanX         | number  | 0       | (Deprecated) Initial pan along x-axis. Use v-model:pan                          |
| initialPanY         | number  | 0       | (Deprecated) Initial pan along y-axis. Use v-model:pan                          |
| enableControlButton | boolean | true    | Enable or disable control buttons                                               |
| buttonPanStep       | number  | 15      | Step size for pan on control buttons                                            |
| buttonZoomStep      | number  | 0.1     | Step size for pan on control buttons                                            |

### Model

- v-model:zoom
- v-model:pan


### Slots

- default - Default Content
- buttons - Control buttons

### Events

- panned
- zoom

All events have argument of type `ZoomableEvent`.

#### ZoomableEvent

| Field | Type   | Description                                                                                    |
| ----- | ------ | ---------------------------------------------------------------------------------------------- |
| zoom  | number | Current zoom value                                                                             |
| pan   | object | Current pan value and delta change in case of `panned` event.                                  |
| type  | string | Source type which triggered the event. `dblClick`, `mouse`, `touch`, `wheel` or `control-btn`. |

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

## ScrollOverlay

Prevents mistaken zoom/pan while scrolling the page using mouse wheel or touchscreen. Useful if your zoomable content is embedded within scrollable content. Google map provides similar functionality [Google](https://developers.google.com/maps/documentation/javascript/examples/control-default).

### Props

| Name            | type    | default   | Description                                                                                                                       |
| --------------- | ------- | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| wheelUnlockKey  | string  | `Control` | Wheel is disabled, until the corresponding Key is pressed. You can set it to any value of `event.key`. [see here](#document-flow) |
| enableWheelLock | boolean | `true`    | When true, zoom using wheel is disabled until `wheelUnclockKey` is pressed.                                                       |
| enableTouchLock | boolean | `true`    | When true, pan or zoom requires touch using two fingers.                                                                          |

---

## Contribute

Contributions are most welcome. Please follow the below steps for any contributions.

### If you add new feature

- Open a suggestion issue first.
- Provide your reasoning on why you want to add this feature.
- Submit your PR.

### If you fix a bug

- If you are resolving an issue, please add `fix: #<issue number> <short message>` in your PR title (e.g.fix: #3899 update entities encoding/decoding).
- Provide a description of the bug in your PR and/or link to the issue.

### Setup

The setup is pretty easy. You need to have `pnpm` installed.

```sh
# install the dependencies
pnpm i

# start the dev thingie
pnpm run dev
```

### Where should I start?

A good way to start is to find an issue labeled as bug, help wanted or feature request and suggest your approach in comments.

Other ways to help:

- Write tests
- Documentation & Demos
- Share your thoughts! Any features you thing vue-zoomable is missing? Any suggestions? Would love to hear that.

## Acknowledgements

- [@panzoom/panzoom](https://github.com/timmywil/panzoom)
