// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import HtmlDemo from "../components/HtmlDemo.vue";
import ReactivityDemo from "../components/ReactivityDemo.vue";
import SvgDemo from "../components/SvgDemo.vue";
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("HtmlDemo", HtmlDemo);
    app.component("ReactivityDemo", ReactivityDemo);
    app.component("SvgDemo", SvgDemo);
  }
} satisfies Theme;
