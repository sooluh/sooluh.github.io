<template>
  <Layout>
    <Title title="All Articles" />

    <div class="articles">
      <div class="container">
        <Preview
          class="article"
          v-for="edge in $page.articles.edges"
          v-bind:key="edge.id"
          v-bind="edge.node"
          :date="formatDate(edge.node.date)"
        />
      </div>
    </div>
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
query {
  articles: allArticle (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
        description
        date
        timeToRead
      }
    }
  }
}
</page-query>

<script>
import Title from "~/components/general/Title.vue";
import { formattedDate } from "~/assets/js/utils.js";
import Preview from "~/components/article/Preview.vue";

export default {
  components: {
    Preview,
    Title,
  },
  methods: {
    formatDate(date) {
      return formattedDate(date);
    },
  },
  metaInfo() {
    const title = `Blog - ${this.$static.metadata.siteName}`;

    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }],
    };
  },
};
</script>

<style scoped lang="scss">
.articles {
  padding: $spacer;
}

.container {
  > * {
    margin-bottom: $spacer;
  }
}
</style>
