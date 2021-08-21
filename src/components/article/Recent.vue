<template>
  <section>
    <More class="heading" title="Recent Articles" link="/articles/" />

    <div class="container">
      <Preview
        class="article"
        v-for="edge in $static.articles.edges"
        v-bind:key="edge.id"
        v-bind="edge.node"
        :date="formatDate(edge.node.date)"
      />
    </div>
  </section>
</template>

<static-query>
query {
  articles: allArticle(sortBy: "date", order: DESC limit: 3) {
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
</static-query>

<script>
import { formattedDate } from "~/assets/js/utils.js";
import More from "~/components/general/More.vue";
import Preview from "~/components/article/Preview.vue";

export default {
  components: {
    More,
    Preview,
  },
  methods: {
    formatDate(date) {
      return formattedDate(date);
    },
  },
};
</script>

<style scoped lang="scss">
section {
  padding: $spacer;
}

.container {
  margin-top: $spacer;

  ::v-deep .article {
    margin-bottom: $spacer;
  }
}
</style>
