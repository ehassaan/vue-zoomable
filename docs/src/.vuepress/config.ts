const { description } = require("../../package");
import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme, defineUserConfig } from "vuepress";

import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import path from "path";

export default defineUserConfig({

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "vue-zoomable",
  base: "/vue-zoomable/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */

  theme: defaultTheme({
    sidebar: 'auto',
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Demos",
        link: "/demos/",
      },
      {
        text: "vue-zoomable",
        link: "https://github.com/HassaanAkbar/vue-zoomable",
      },
    ],
  }),
  // themeConfig: {
  //   repo: '',
  //   editLinks: false,
  //   docsDir: '',
  //   editLinkText: '',
  //   lastUpdated: false,
  //   nav: [
  //     {
  //       text: 'Guide',
  //       link: '/guide/',
  //     },
  //     {
  //       text: 'Config',
  //       link: '/config/'
  //     },
  //     {
  //       text: 'vue-zoomable',
  //       link: 'https://github.com/HassaanAkbar/vue-zoomable'
  //     }
  //   ],
  // sidebar: {
  //   '/guide/': [
  //     {
  //       title: 'Guide',
  //       collapsable: false,
  //     }
  //   ],
  // }
  // },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
  //   {
  //     name: "@vuepress/plugin-back-to-top",
  //   },
  //   {
  //     name: "@vuepress/plugin-medium-zoom",
  //   },
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, "./components/")
  }),
  ],

});
