import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("HtmlDemo", defineAsyncComponent(() => import("C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/components/HtmlDemo.vue"))),
      app.component("ReactivityDemo", defineAsyncComponent(() => import("C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/components/ReactivityDemo.vue"))),
      app.component("SvgDemo", defineAsyncComponent(() => import("C:/Users/Hassan.Akbar/Documents/VsCode/vue-zoomable/docs/src/.vuepress/components/SvgDemo.vue")))
  },
}
