import comp from "C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/.temp/pages/demos/html-demo.html.vue"
const data = JSON.parse("{\"path\":\"/demos/html-demo.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":[{\"text\":\"SVG Content\",\"link\":\"./svg-demo\"},{\"text\":\"HTML Demo\",\"link\":\"./html-demo\"},{\"text\":\"Reactivity Demo\",\"link\":\"./reactivity-demo\"}]},\"headers\":[],\"git\":{\"updatedTime\":1696998766000,\"contributors\":[{\"name\":\"Hassaan Akbar\",\"email\":\"hassaan.akbar@outlook.com\",\"commits\":4}]},\"filePathRelative\":\"demos/html-demo.md\"}")
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
