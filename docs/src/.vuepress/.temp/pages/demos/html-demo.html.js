export const data = JSON.parse("{\"key\":\"v-fb746aa8\",\"path\":\"/demos/html-demo.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":[{\"text\":\"SVG Content\",\"link\":\"./svg-demo\"},{\"text\":\"HTML Content\",\"link\":\"./html-demo\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1657686715000,\"contributors\":[{\"name\":\"Hassaan Akbar\",\"email\":\"hassaan.akbar@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"demos/html-demo.md\"}")

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
