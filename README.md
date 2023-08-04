# vue-zoomable-cute

Tiny and high performance zoom and pan library for Vue 3. It uses CSS Transforms which provides hardware acceleration.

Checkout the [demos](https://hassaanakbar.github.io/vue-zoomable/demos/).

## Why the fork?

Because I wanna have more controll!!

> _laughs in an evil manner_

xD

I will still make pr for changes though.

## Installation

```sh
npm install vue-zoomable-cute
# or
yarn add vue-zoomable-cute
```

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
import VueZoomable from "vue-zoomable-cute";
import "vue-zoomable-cute/dist/style.css";
</script>
```
### Model

- v-model:zoom
- v-model:pan

### Props

All props other than `selector` are observable and can be changed after initialization.

| Name                 | type    | default   | Description                                                                                                                                        |
| -------------------- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| selector             | string  | `* > *`   | Root element to apply transform on. Preferrably an `id` on `<div>` or `<g>` tag                                                                    |
| maxZoom              | number  | 3         | Maximum allowed zoom                                                                                                                               |
| minZoom              | number  | 0.5       | Minimum allowed zoom                                                                                                                               |
| dblClickZoomStep     | number  | 0.4       | Step size for zoom on double click                                                                                                                 |
| wheelZoomStep        | number  | 0.05      | Step size for zoom on wheel                                                                                                                        |
| panEnabled           | boolean | true      | Enable panning                                                                                                                                     |
| zoomEnabled          | boolean | true      | Enable zoom                                                                                                                                        |
| mouseEnabled         | boolean | true      | Enable mouse events                                                                                                                                |
| touchEnabled         | boolean | true      | Enable touch events                                                                                                                                |
| dblClickEnabled      | boolean | true      | Zoom on double click enabled                                                                                                                       |
| wheelEnabled         | boolean | true      | Zoom on mouse enabled                                                                                                                              |
| initialZoom          | number  | 0.5       | (Deprecated) Initial zoom value. Use v-model:zoom                                                                                                  |
| initialPanX          | number  | 0         | (Deprecated) Initial pan along x-axis. Use v-model:pan                                                                                             |
| initialPanY          | number  | 0         | (Deprecated) Initial pan along y-axis. Use v-model:pan                                                                                             |
| enableControllButton | boolean | false     | Defines, if the controll buttons will be enabled.                                                                                                  |
| buttonPanStep        | number  | 15        | Step size for pan on controll buttons                                                                                                              |
| buttonZoomStep       | number  | 0.1       | Step size for pan on controll buttons                                                                                                              |
| enableWheelOnKey     | string  | undefined | If not null, the wheel is disabled, until the corresponding Key is pressed. You can set it to any value of `event.key`. [see here](#document-flow) |

### Document Flow

If you have any document flow whatsoever on your page, it certainly won't do if you can only zoom with the mouse wheel. Because that would scroll the document at the same time. One sollution might be to do some weird stuff with prevent default or smth. But that gets messy REAAAL quickly.

My sollution was inspired by [Google-Maps](https://developers.google.com/maps/documentation/javascript/examples/control-default). You can set the prop `enableWheelOnKey` to whatever key button you like. _(Every value that can be found in KeyEvents `event.key` are valid and should work)_. If `enableWheelOnKey` is set, the zoom on Wheel will only work, if simmultaniously the corresponding Button is pressed.

If you have a document flow, it is reccomended, to set `enableWheelOnKey` to the value `Control`.

```vue
<VueZoomable :enableWheelOnKey="'Control'">
</VueZoomable>
```

Now usually `Control` + `wheel` zooms in and out of the viewport. This... isn't good. Arguably this is a worse ux as scrolling while zooming. That's why I prevent it when following cases are all met:

- `enableWheelOnKey` is set to `"Control"`
- the mouse is within the bounds of the container element
- you... well would zoom the viewport

Because this could be unintuitive, I implemented a message that tells you what you need to do to actually zoom, that appears after you would have zoomed without this. Just like [Google](https://developers.google.com/maps/documentation/javascript/examples/control-default) did.

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
