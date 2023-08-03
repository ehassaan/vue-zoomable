import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("HtmlDemo", defineAsyncComponent(() => import("D:/VsCode/vue-zoomable/original/docs/src/.vuepress/components/HtmlDemo.vue"))),
      app.component("SvgDemo", defineAsyncComponent(() => import("D:/VsCode/vue-zoomable/original/docs/src/.vuepress/components/SvgDemo.vue")))
  },
}
