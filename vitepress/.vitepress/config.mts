import { defineConfig } from 'vitepress';
import { description } from "../package.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "vue-zoomable",
  description: description,
  base: "/vue-zoomable",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/assets/logo.png",
    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Demos', link: '/demos' }
    ],

    sidebar: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Demos',
        link: '/demos',
        items: [
          { text: 'HTML Content', link: '/demos/html-demo' },
          { text: 'SVG Content', link: '/demos/svg-demo' },
          { text: 'Reactivity Demo', link: '/demos/reactivity-demo' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ehassaan/vue-zoomable' }
    ]
  }
});
