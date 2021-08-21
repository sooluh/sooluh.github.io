<template>
  <Layout>
    <Header v-bind="$page.article" :date="fDate" />

    <Scroll class="scroll-indicator" />

    <article>
      <div class="container">
        <div v-html="$page.article.content" />
      </div>
    </article>

    <Footer :tags="$page.article.tags" />

    <Disqus :title="$page.article.title" />
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<page-query>
query ($path: String!) {
   article: article (path: $path) {
    id
    title
    content
    date
    timeToRead
    tags
    description
  }
}
</page-query>

<script>
import { formattedDate } from "~/assets/js/utils.js";
import Header from "~/components/article/Header.vue";
import Scroll from "~/components/article/Scroll.vue";
const Footer = () => import("~/components/article/Footer.vue");
import Disqus from "~/components/article/Disqus.vue";

export default {
  components: {
    Header,
    Scroll,
    Footer,
  },
  computed: {
    fDate() {
      return formattedDate(this.$page.article.date);
    },
  },
  metaInfo() {
    const title = `${this.$page.article.title} - ${
      this.$static.metadata.siteName
    }`;
    const description = this.$page.article.description;

    return {
      title: title,
      meta: [
        { key: "description", name: "description", content: description },
        { name: "og:title", key: "og:title", content: title },
        { name: "og:description", key: "og:description", content: description },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_articles.scss";
</style>
