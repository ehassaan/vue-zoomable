export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/demos/html-demo.html", { loader: () => import(/* webpackChunkName: "demos_html-demo.html" */"C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/demos/html-demo.html.js"), meta: {"title":""} }],
  ["/demos/", { loader: () => import(/* webpackChunkName: "demos_index.html" */"C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/demos/index.html.js"), meta: {"title":"Demos"} }],
  ["/demos/reactivity-demo.html", { loader: () => import(/* webpackChunkName: "demos_reactivity-demo.html" */"C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/demos/reactivity-demo.html.js"), meta: {"title":""} }],
  ["/demos/svg-demo.html", { loader: () => import(/* webpackChunkName: "demos_svg-demo.html" */"C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/demos/svg-demo.html.js"), meta: {"title":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Getting Started"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
