import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("svg-demo", defineAsyncComponent(() => import("./components/SvgDemo.vue")))
  },
}
