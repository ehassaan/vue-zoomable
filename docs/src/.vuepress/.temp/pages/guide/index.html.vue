<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h1>
<p>Tiny and high performance zoom and pan library for Vue 3. It uses CSS Transforms which provides hardware acceleration.</p>
<p>Checkout the <a href="https://hassaanakbar.github.io/vue-zoomable/demos/" target="_blank" rel="noopener noreferrer">demos<ExternalLinkIcon/></a>.</p>
<h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2>
<ul>
<li>Simply wrap your content in VueZoomable component to make it zoom-able and pan-able.</li>
<li>Mouse wheel support</li>
<li>Touch and pinch-zoom support</li>
<li>Control buttons for zoom and pan</li>
<li>Supports SVG and HTML content</li>
<li>Uses CSS transform for zoom and pan</li>
<li><code v-pre>ScrollOverlay</code> component to lock pan/zoom while scrolling</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p><code v-pre>npm install vue-zoomable</code></p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>Immediate child of VueZoomable must be either svg or an html container.</p>
<pre v-pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueZoomable</span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black</span><span class="token punctuation">"</span></span></span>
    <span class="token attr-name">selector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myContent<span class="token punctuation">"</span></span>
    <span class="token attr-name">:minZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.5<span class="token punctuation">"</span></span>
    <span class="token attr-name">:maxZoom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myContent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VueZoomable</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> VueZoomable <span class="token keyword">from</span> <span class="token string">"vue-zoomable"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"vue-zoomable/dist/style.css"</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<h1 id="api-reference" tabindex="-1"><a class="header-anchor" href="#api-reference"><span>API Reference</span></a></h1>
<h2 id="vuezoomable" tabindex="-1"><a class="header-anchor" href="#vuezoomable"><span>VueZoomable</span></a></h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>type</th>
<th>default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>selector</td>
<td>string</td>
<td><code v-pre>* &gt; *</code></td>
<td>Root element to apply transform on. Preferrably an <code v-pre>id</code> on <code v-pre>&lt;div&gt;</code> or <code v-pre>&lt;g&gt;</code> tag</td>
</tr>
<tr>
<td>maxZoom</td>
<td>number</td>
<td>3</td>
<td>Maximum allowed zoom</td>
</tr>
<tr>
<td>minZoom</td>
<td>number</td>
<td>0.5</td>
<td>Minimum allowed zoom</td>
</tr>
<tr>
<td>dblClickZoomStep</td>
<td>number</td>
<td>0.4</td>
<td>Step size for zoom on double click</td>
</tr>
<tr>
<td>wheelZoomStep</td>
<td>number</td>
<td>0.2</td>
<td>Step size for zoom on wheel</td>
</tr>
<tr>
<td>panEnabled</td>
<td>boolean</td>
<td>true</td>
<td>Enable panning</td>
</tr>
<tr>
<td>zoomEnabled</td>
<td>boolean</td>
<td>true</td>
<td>Enable zoom</td>
</tr>
<tr>
<td>mouseEnabled</td>
<td>boolean</td>
<td>true</td>
<td>Enable mouse events</td>
</tr>
<tr>
<td>touchEnabled</td>
<td>boolean</td>
<td>true</td>
<td>Enable touch events</td>
</tr>
<tr>
<td>dblClickEnabled</td>
<td>boolean</td>
<td>true</td>
<td>Zoom on double click enabled</td>
</tr>
<tr>
<td>wheelEnabled</td>
<td>boolean</td>
<td>true</td>
<td>Zoom on mouse enabled</td>
</tr>
<tr>
<td>initialZoom</td>
<td>number</td>
<td>0.5</td>
<td>(Deprecated) Initial zoom value. Use v-model:zoom</td>
</tr>
<tr>
<td>initialPanX</td>
<td>number</td>
<td>0</td>
<td>(Deprecated) Initial pan along x-axis. Use v-model:pan</td>
</tr>
<tr>
<td>initialPanY</td>
<td>number</td>
<td>0</td>
<td>(Deprecated) Initial pan along y-axis. Use v-model:pan</td>
</tr>
<tr>
<td>enableControlButton</td>
<td>boolean</td>
<td>true</td>
<td>Enable or disable control buttons</td>
</tr>
<tr>
<td>buttonPanStep</td>
<td>number</td>
<td>15</td>
<td>Step size for pan on control buttons</td>
</tr>
<tr>
<td>buttonZoomStep</td>
<td>number</td>
<td>0.1</td>
<td>Step size for pan on control buttons</td>
</tr>
</tbody>
</table>
<h3 id="model" tabindex="-1"><a class="header-anchor" href="#model"><span>Model</span></a></h3>
<ul>
<li>v-model:zoom</li>
<li>v-model:pan</li>
</ul>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3>
<ul>
<li>default - Default Content</li>
<li>buttons - Control buttons</li>
</ul>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h3>
<ul>
<li>panned</li>
<li>zoom</li>
</ul>
<p>All events have argument of type <code v-pre>ZoomableEvent</code>.</p>
<h4 id="zoomableevent" tabindex="-1"><a class="header-anchor" href="#zoomableevent"><span>ZoomableEvent</span></a></h4>
<table>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>zoom</td>
<td>number</td>
<td>Current zoom value</td>
</tr>
<tr>
<td>pan</td>
<td>object</td>
<td>Current pan value and delta change in case of <code v-pre>panned</code> event.</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>Source type which triggered the event. <code v-pre>dblClick</code>, <code v-pre>mouse</code>, <code v-pre>touch</code>, <code v-pre>wheel</code> or <code v-pre>control-btn</code>.</td>
</tr>
</tbody>
</table>
<p><em>Sample event data:</em></p>
<pre v-pre><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">"zoom"</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
  <span class="token property">"pan"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"deltaX"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"deltaY"</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"mouse"</span>
<span class="token punctuation">}</span>
</code></pre>
<h2 id="scrolloverlay" tabindex="-1"><a class="header-anchor" href="#scrolloverlay"><span>ScrollOverlay</span></a></h2>
<p>Prevents mistaken zoom/pan while scrolling the page using mouse wheel or touchscreen. Useful if your zoomable content is embedded within scrollable content. Google map provides similar functionality <a href="https://developers.google.com/maps/documentation/javascript/examples/control-default" target="_blank" rel="noopener noreferrer">Google<ExternalLinkIcon/></a>.</p>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>type</th>
<th>default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>wheelUnlockKey</td>
<td>string</td>
<td><code v-pre>Control</code></td>
<td>Wheel is disabled, until the corresponding Key is pressed. You can set it to any value of <code v-pre>event.key</code>. <a href="#document-flow">see here</a></td>
</tr>
<tr>
<td>enableWheelLock</td>
<td>boolean</td>
<td><code v-pre>true</code></td>
<td>When true, zoom using wheel is disabled until <code v-pre>wheelUnclockKey</code> is pressed.</td>
</tr>
<tr>
<td>enableTouchLock</td>
<td>boolean</td>
<td><code v-pre>true</code></td>
<td>When true, pan or zoom requires touch using two fingers.</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="contribute" tabindex="-1"><a class="header-anchor" href="#contribute"><span>Contribute</span></a></h2>
<p>Contributions are most welcome. Please follow the below steps for any contributions.</p>
<h3 id="if-you-add-new-feature" tabindex="-1"><a class="header-anchor" href="#if-you-add-new-feature"><span>If you add new feature</span></a></h3>
<ul>
<li>Open a suggestion issue first.</li>
<li>Provide your reasoning on why you want to add this feature.</li>
<li>Submit your PR.</li>
</ul>
<h3 id="if-you-fix-a-bug" tabindex="-1"><a class="header-anchor" href="#if-you-fix-a-bug"><span>If you fix a bug</span></a></h3>
<ul>
<li>If you are resolving an issue, please add <code v-pre>fix: #&lt;issue number&gt; &lt;short message&gt;</code> in your PR title (e.g.fix: #3899 update entities encoding/decoding).</li>
<li>Provide a description of the bug in your PR and/or link to the issue.</li>
</ul>
<h3 id="setup" tabindex="-1"><a class="header-anchor" href="#setup"><span>Setup</span></a></h3>
<p>The setup is pretty easy. You need to have <code v-pre>pnpm</code> installed.</p>
<pre v-pre><code class="language-sh"><span class="token comment"># install the dependencies</span>
<span class="token function">pnpm</span> i

<span class="token comment"># start the dev thingie</span>
<span class="token function">pnpm</span> run dev
</code></pre>
<h3 id="where-should-i-start" tabindex="-1"><a class="header-anchor" href="#where-should-i-start"><span>Where should I start?</span></a></h3>
<p>A good way to start is to find an issue labeled as bug, help wanted or feature request and suggest your approach in comments.</p>
<p>Other ways to help:</p>
<ul>
<li>Write tests</li>
<li>Documentation &amp; Demos</li>
<li>Share your thoughts! Any features you thing vue-zoomable is missing? Any suggestions? Would love to hear that.</li>
</ul>
<h2 id="acknowledgements" tabindex="-1"><a class="header-anchor" href="#acknowledgements"><span>Acknowledgements</span></a></h2>
<ul>
<li><a href="https://github.com/timmywil/panzoom" target="_blank" rel="noopener noreferrer">@panzoom/panzoom<ExternalLinkIcon/></a></li>
</ul>
</div></template>


