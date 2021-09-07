import VueDisqus from "vue-disqus";
import "~/assets/scss/styles.scss";
import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  // Disqus
  Vue.use(VueDisqus, { shortname: "suluh" });

  // Google Adsense
  head.script.push({
    type: "text/javascript",
    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4435219907558988",
    asyc: "true"
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
