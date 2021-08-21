<template>
  <Layout>
    <Title title="Links" />

    <div class="links">
      <div class="container">
        <Item
          class="link"
          v-for="edge in $page.links.edges"
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
  links: allLinks (order: ASC) {
    edges {
      node {
        id
        title
        caption
        url
      }
    }
  }
}
</page-query>

<script>
import Title from "~/components/general/Title.vue";
import Item from "~/components/link/Item.vue";

export default {
  components: {
    Title,
    Item,
  },
  metaInfo() {
    const title = `Links - ${this.$static.metadata.siteName}`;

    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }],
    };
  },
};
</script>

<style lang="scss">
.links {
  padding: $spacer;

  .container {
    > * {
      margin-bottom: $spacer;
    }
  }
}
</style>
