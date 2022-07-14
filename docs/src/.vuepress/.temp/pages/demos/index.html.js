export const data = JSON.parse("{\"key\":\"v-7a043378\",\"path\":\"/demos/\",\"title\":\"Demos\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":[{\"text\":\"SVG Content\",\"link\":\"/demos/svg-demo\"},{\"text\":\"HTML Content\",\"link\":\"/demos/html-demo\"}]},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1657686715000,\"contributors\":[{\"name\":\"Hassaan Akbar\",\"email\":\"hassaan.akbar@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"demos/index.md\"}")

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
