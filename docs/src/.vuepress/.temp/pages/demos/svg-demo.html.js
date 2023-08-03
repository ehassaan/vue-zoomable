export const data = JSON.parse("{\"key\":\"v-9bf6c796\",\"path\":\"/demos/svg-demo.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":[{\"text\":\"SVG Content\",\"link\":\"./svg-demo\"},{\"text\":\"HTML Content\",\"link\":\"./html-demo\"}]},\"headers\":[],\"git\":{\"updatedTime\":1657770800000,\"contributors\":[{\"name\":\"Hassaan Akbar\",\"email\":\"hassaan.akbar@outlook.com\",\"commits\":2}]},\"filePathRelative\":\"demos/svg-demo.md\"}")

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
