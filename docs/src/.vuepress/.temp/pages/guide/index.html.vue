<template><div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2>
<p>Tiny and high performance zoom and pan library for Vue 3. It uses CSS Transforms which provides hardware acceleration.
<code v-pre>vue-zoomable</code> is written using Typescript and Vue 3 composition API.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p><code v-pre>npm install vue-zoomable</code></p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<p>Immediate child of VueZoomable must be either svg or an html container.</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
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
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<p>All props other than <code v-pre>selector</code> are observable and can be changed after initialization.</p>
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
<td>0.05</td>
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
<td>Initial zoom value</td>
</tr>
<tr>
<td>initialPanX</td>
<td>number</td>
<td>0</td>
<td>Initial pan along x-axis</td>
</tr>
<tr>
<td>initialPanY</td>
<td>number</td>
<td>0</td>
<td>Initial pan along y-axis</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<ul>
<li>panned</li>
<li>zoom</li>
</ul>
<p>All events have argument of type <code v-pre>ZoomableEvent</code>.</p>
<h3 id="zoomableevent" tabindex="-1"><a class="header-anchor" href="#zoomableevent" aria-hidden="true">#</a> ZoomableEvent</h3>
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
<td>Source type which triggered the event. <code v-pre>dblClick</code>, <code v-pre>mouse</code>, <code v-pre>touch</code> or <code v-pre>wheel</code>.</td>
</tr>
</tbody>
</table>
<p><em>Sample event data:</em></p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"zoom"</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
  <span class="token property">"pan"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">"deltaX"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">"deltaY"</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"mouse"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="contribute" tabindex="-1"><a class="header-anchor" href="#contribute" aria-hidden="true">#</a> Contribute</h2>
<p>Contributions are most welcome. Please follow the below steps for any contributions.</p>
<h3 id="if-you-add-new-feature" tabindex="-1"><a class="header-anchor" href="#if-you-add-new-feature" aria-hidden="true">#</a> If you add new feature</h3>
<ul>
<li>Open a suggestion issue first.</li>
<li>Provide your reasoning on why you want to add this feature.</li>
<li>Submit your PR.</li>
</ul>
<h3 id="if-you-fix-a-bug" tabindex="-1"><a class="header-anchor" href="#if-you-fix-a-bug" aria-hidden="true">#</a> If you fix a bug</h3>
<ul>
<li>If you are resolving an issue, please add <code v-pre>fix: #&lt;issue number&gt; &lt;short message&gt;</code> in your PR title (e.g.fix: #3899 update entities encoding/decoding).</li>
<li>Provide a description of the bug in your PR and/or link to the issue.</li>
</ul>
<h3 id="where-should-i-start" tabindex="-1"><a class="header-anchor" href="#where-should-i-start" aria-hidden="true">#</a> Where should I start?</h3>
<p>A good way to start is to find an issue labeled as bug, help wanted or feature request and suggest your approach in comments.</p>
<p>Other ways to help:</p>
<ul>
<li>Write tests</li>
<li>Documentation &amp; Demos</li>
<li>Share your thoughts! Any features you thing vue-zoomable is missing? Any suggestions? Would love to hear that.</li>
</ul>
<h2 id="acknowledgements" tabindex="-1"><a class="header-anchor" href="#acknowledgements" aria-hidden="true">#</a> Acknowledgements</h2>
<ul>
<li><a href="https://github.com/timmywil/panzoom" target="_blank" rel="noopener noreferrer">@panzoom/panzoom<ExternalLinkIcon/></a></li>
</ul>
</div></template>
