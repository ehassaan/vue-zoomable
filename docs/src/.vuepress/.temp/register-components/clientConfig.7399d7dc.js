import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("svg-demo", defineAsyncComponent(() => import("E:\\VsCode\\GraphBuilder\\vue-zoomable\\docs\\src\\.vuepress\\components\\SvgDemo.vue")))
  },
}
