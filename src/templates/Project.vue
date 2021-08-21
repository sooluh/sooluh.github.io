<template>
  <Layout>
    <Title :title="$page.project.title" />

    <article>
      <div class="container">
        <g-image
          :alt="`${$page.project.title} - ${$page.project.summary}`"
          :src="$page.project.image"
          :size="350"
          class="project-img"
        />

        <div v-html="$page.project.content"></div>
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
query Project ($path: String!) {
   project: project (path: $path) {
    id
    title
    summary
    image
    url
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
    const title = `${this.$page.project.title} - ${
      this.$static.metadata.siteName
    }`;

    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_articles.scss";

img.project-img {
  max-height: unset;
}
</style>
