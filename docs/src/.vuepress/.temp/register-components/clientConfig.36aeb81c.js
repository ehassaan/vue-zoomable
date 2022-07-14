import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("HtmlDemo", defineAsyncComponent(() => import("E:/VsCode/GraphBuilder/vue-zoomable/docs/src/.vuepress/components/HtmlDemo.vue"))),
      app.component("SvgDemo", defineAsyncComponent(() => import("E:/VsCode/GraphBuilder/vue-zoomable/docs/src/.vuepress/components/SvgDemo.vue")))
  },
}
