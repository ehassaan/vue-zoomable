import{_ as t,c as i,o as a,a0 as e}from"./chunks/framework.5W2ysW2R.js";const u=JSON.parse('{"title":"Getting Started","description":"Getting Started","frontmatter":{"lang":"en-US","title":"Getting Started","description":"Getting Started"},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}'),n={name:"guide/index.md"};function l(h,s,o,d,r,p){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Tiny and high performance zoom and pan library for Vue 3. It uses CSS Transforms which provides hardware acceleration.</p><p>Checkout the <a href="/vue-zoomable/demos/">demos</a>.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>Simply wrap your content in VueZoomable component to make it zoom-able and pan-able.</li><li>Mouse wheel support</li><li>Touch and pinch-zoom support</li><li>Control buttons for zoom and pan</li><li>Supports SVG and HTML content</li><li>Uses CSS transform for zoom and pan</li><li><code>ScrollOverlay</code> component to lock pan/zoom while scrolling</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p><code>npm install vue-zoomable</code></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Immediate child of VueZoomable must be either svg or an html container.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">VueZoomable</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> solid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> black</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    selector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#myContent&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minZoom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">maxZoom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myContent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">circle</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">VueZoomable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> VueZoomable </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue-zoomable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue-zoomable/dist/style.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h1 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h1><h2 id="vuezoomable" tabindex="-1">VueZoomable <a class="header-anchor" href="#vuezoomable" aria-label="Permalink to &quot;VueZoomable&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Name</th><th>type</th><th>default</th><th>Description</th></tr></thead><tbody><tr><td>selector</td><td>string</td><td><code>* &gt; *</code></td><td>Root element to apply transform on. Preferrably an <code>id</code> on <code>&lt;div&gt;</code> or <code>&lt;g&gt;</code> tag</td></tr><tr><td>maxZoom</td><td>number</td><td>3</td><td>Maximum allowed zoom</td></tr><tr><td>minZoom</td><td>number</td><td>0.5</td><td>Minimum allowed zoom</td></tr><tr><td>dblClickZoomStep</td><td>number</td><td>0.4</td><td>Step size for zoom on double click</td></tr><tr><td>wheelZoomStep</td><td>number</td><td>0.2</td><td>Step size for zoom on wheel</td></tr><tr><td>panEnabled</td><td>boolean</td><td>true</td><td>Enable panning</td></tr><tr><td>zoomEnabled</td><td>boolean</td><td>true</td><td>Enable zoom</td></tr><tr><td>mouseEnabled</td><td>boolean</td><td>true</td><td>Enable mouse events</td></tr><tr><td>touchEnabled</td><td>boolean</td><td>true</td><td>Enable touch events</td></tr><tr><td>dblClickEnabled</td><td>boolean</td><td>true</td><td>Zoom on double click enabled</td></tr><tr><td>wheelEnabled</td><td>boolean</td><td>true</td><td>Zoom on mouse enabled</td></tr><tr><td>initialZoom</td><td>number</td><td>0.5</td><td>(Deprecated) Initial zoom value. Use v-model:zoom</td></tr><tr><td>initialPanX</td><td>number</td><td>0</td><td>(Deprecated) Initial pan along x-axis. Use v-model:pan</td></tr><tr><td>initialPanY</td><td>number</td><td>0</td><td>(Deprecated) Initial pan along y-axis. Use v-model:pan</td></tr><tr><td>enableControlButton</td><td>boolean</td><td>true</td><td>Enable or disable control buttons</td></tr><tr><td>buttonPanStep</td><td>number</td><td>15</td><td>Step size for pan on control buttons</td></tr><tr><td>buttonZoomStep</td><td>number</td><td>0.1</td><td>Step size for pan on control buttons</td></tr></tbody></table><h3 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model&quot;">​</a></h3><ul><li>v-model:zoom</li><li>v-model:pan</li></ul><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><ul><li>default - Default Content</li><li>buttons - Control buttons</li></ul><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><ul><li>panned</li><li>zoom</li></ul><p>All events have argument of type <code>ZoomableEvent</code>.</p><h4 id="zoomableevent" tabindex="-1">ZoomableEvent <a class="header-anchor" href="#zoomableevent" aria-label="Permalink to &quot;ZoomableEvent&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>zoom</td><td>number</td><td>Current zoom value</td></tr><tr><td>pan</td><td>object</td><td>Current pan value and delta change in case of <code>panned</code> event.</td></tr><tr><td>type</td><td>string</td><td>Source type which triggered the event. <code>dblClick</code>, <code>mouse</code>, <code>touch</code>, <code>wheel</code> or <code>control-btn</code>.</td></tr></tbody></table><p><em>Sample event data:</em></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;zoom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;pan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;y&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deltaX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deltaY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mouse&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="scrolloverlay" tabindex="-1">ScrollOverlay <a class="header-anchor" href="#scrolloverlay" aria-label="Permalink to &quot;ScrollOverlay&quot;">​</a></h2><p>Prevents mistaken zoom/pan while scrolling the page using mouse wheel or touchscreen. Useful if your zoomable content is embedded within scrollable content. Google map provides similar functionality <a href="https://developers.google.com/maps/documentation/javascript/examples/control-default" target="_blank" rel="noreferrer">Google</a>.</p><h3 id="props-1" tabindex="-1">Props <a class="header-anchor" href="#props-1" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Name</th><th>type</th><th>default</th><th>Description</th></tr></thead><tbody><tr><td>wheelUnlockKey</td><td>string</td><td><code>Control</code></td><td>Wheel is disabled, until the corresponding Key is pressed. You can set it to any value of <code>event.key</code>. <a href="#document-flow">see here</a></td></tr><tr><td>enableWheelLock</td><td>boolean</td><td><code>true</code></td><td>When true, zoom using wheel is disabled until <code>wheelUnclockKey</code> is pressed.</td></tr><tr><td>enableTouchLock</td><td>boolean</td><td><code>true</code></td><td>When true, pan or zoom requires touch using two fingers.</td></tr></tbody></table><hr><h2 id="contribute" tabindex="-1">Contribute <a class="header-anchor" href="#contribute" aria-label="Permalink to &quot;Contribute&quot;">​</a></h2><p>Contributions are most welcome. Please follow the below steps for any contributions.</p><h3 id="if-you-add-new-feature" tabindex="-1">If you add new feature <a class="header-anchor" href="#if-you-add-new-feature" aria-label="Permalink to &quot;If you add new feature&quot;">​</a></h3><ul><li>Open a suggestion issue first.</li><li>Provide your reasoning on why you want to add this feature.</li><li>Submit your PR.</li></ul><h3 id="if-you-fix-a-bug" tabindex="-1">If you fix a bug <a class="header-anchor" href="#if-you-fix-a-bug" aria-label="Permalink to &quot;If you fix a bug&quot;">​</a></h3><ul><li>If you are resolving an issue, please add <code>fix: #&lt;issue number&gt; &lt;short message&gt;</code> in your PR title (e.g.fix: #3899 update entities encoding/decoding).</li><li>Provide a description of the bug in your PR and/or link to the issue.</li></ul><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><p>The setup is pretty easy. You need to have <code>pnpm</code> installed.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install the dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># start the dev thingie</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h3 id="where-should-i-start" tabindex="-1">Where should I start? <a class="header-anchor" href="#where-should-i-start" aria-label="Permalink to &quot;Where should I start?&quot;">​</a></h3><p>A good way to start is to find an issue labeled as bug, help wanted or feature request and suggest your approach in comments.</p><p>Other ways to help:</p><ul><li>Write tests</li><li>Documentation &amp; Demos</li><li>Share your thoughts! Any features you thing vue-zoomable is missing? Any suggestions? Would love to hear that.</li></ul><h2 id="acknowledgements" tabindex="-1">Acknowledgements <a class="header-anchor" href="#acknowledgements" aria-label="Permalink to &quot;Acknowledgements&quot;">​</a></h2><ul><li><a href="https://github.com/timmywil/panzoom" target="_blank" rel="noreferrer">@panzoom/panzoom</a></li></ul>`,45)]))}const E=t(n,[["render",l]]);export{u as __pageData,E as default};
