import comp from "C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/logo.png\",\"tagline\":\"Tiny and high performance pan and zoom library for Vue 3 written in Typescript.\",\"actionText\":\"Quick Start →\",\"actionLink\":\"/guide/\",\"features\":[{\"title\":\"Tiny & High Performance\",\"details\":\"Uses CSS transforms which utilizes hardware acceleration where available.\"},{\"title\":\"Typescript Support\",\"details\":\"Written using Typescript providing first class Typescript support.\"},{\"title\":\"Easy to use\",\"details\":\"Just put your code in <vue-zoomable> component to make it zoomable and pan-able.\"}],\"footer\":\"Released under the MIT License. Copyright © 2023-present Hassaan Akbar\\n\"},\"headers\":[],\"git\":{\"updatedTime\":1728171278000,\"contributors\":[{\"name\":\"Hassaan Akbar\",\"email\":\"hassaan.akbar@outlook.com\",\"commits\":4},{\"name\":\"Hassan Akbar\",\"email\":\"hassan.akbar@systemsltd.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
