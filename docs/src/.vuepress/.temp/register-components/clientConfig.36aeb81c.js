import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("demo-component", defineAsyncComponent(() => import("E:/VsCode/GraphBuilder/vue-zoomable/docs/src/.vuepress/components/demo-component.vue"))),
      app.component("HtmlDemo", defineAsyncComponent(() => import("E:/VsCode/GraphBuilder/vue-zoomable/docs/src/.vuepress/components/HtmlDemo.vue"))),
      app.component("OtherComponent", defineAsyncComponent(() => import("E:/VsCode/GraphBuilder/vue-zoomable/docs/src/.vuepress/components/OtherComponent.vue"))),
      app.component("SvgDemo", defineAsyncComponent(() => import("E:/VsCode/GraphBuilder/vue-zoomable/docs/src/.vuepress/components/SvgDemo.vue"))),
      app.component("Foo-Bar", defineAsyncComponent(() => import("E:/VsCode/GraphBuilder/vue-zoomable/docs/src/.vuepress/components/Foo/Bar.vue")))
  },
}
