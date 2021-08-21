<template>
  <Layout>
    <Title title="All Projects" />

    <div class="projects">
      <div class="container">
        <Card
          class="card"
          v-for="edge in $page.projects.edges"
          v-bind:key="edge.id"
          v-bind="edge.node"
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
  projects: allProject (sortBy: "date", order: DESC) {
    edges {
      node {
        title
        path
        summary
        image (width: 471)
        url
      }
    }
  }
}
</page-query>

<script>
import Title from "~/components/general/Title.vue";
import { formattedDate } from "~/assets/js/utils.js";
import Card from "~/components/project/Card.vue";

export default {
  components: {
    Card,
    Title,
  },
  methods: {
    formatDate(date) {
      return formattedDate(date);
    },
  },
  metaInfo() {
    const title = `Portfolio - ${this.$static.metadata.siteName}`;

    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }],
    };
  },
};
</script>

<style scoped lang="scss">
.projects {
  padding: $spacer;
}

.container {
  display: grid;
  grid-gap: $spacer;
  grid-template-columns: 1fr;

  @include sm {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
