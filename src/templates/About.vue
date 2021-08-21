<template>
  <Layout>
    <Title :title="$page.about.title" />

    <article>
      <div class="container">
        <div v-html="$page.about.content"></div>
      </div>
    </article>
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
  about: about(path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
import Title from "~/components/general/Title.vue";

export default {
  components: {
    Title,
  },
  metaInfo() {
    const title = `Tentang - ${this.$static.metadata.siteName}`;

    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_articles.scss";
</style>
