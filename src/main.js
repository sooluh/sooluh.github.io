import VueDisqus from "vue-disqus";
import "~/assets/scss/styles.scss";
import DefaultLayout from "~/layouts/Default.vue";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  // Disqus
  Vue.use(VueDisqus, { shortname: "suluh" });
}
