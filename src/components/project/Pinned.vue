<template>
  <section>
    <More class="heading" title="Pinned Projects" link="/projects/" />

    <div class="container">
      <div id="feat-proj" class="projects">
        <Card
          class="card"
          v-for="edge in $static.projects.edges"
          v-bind:key="edge.id"
          v-bind="edge.node"
        />
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  projects: allProject(
    filter: {
      featured: { eq: true }
    },
    sortBy: "date",
    order: ASC,
    limit: 3
  ) {
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
</static-query>

<script>
import Card from "~/components/project/Card.vue";
import More from "~/components/general/More.vue";

export default {
  components: {
    More,
    Card,
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 0 $spacer;
}

section ::v-deep .heading {
  margin-top: $spacer;
}

.projects {
  display: flex;
  position: relative;
  padding: $spacer;
  margin: 0 #{-$spacer};
  overflow-x: scroll;
  overflow-y: visible;
  justify-content: space-between;

  @include sm {
    margin: 0;
    padding: $spacer 0;
    overflow: visible;
  }

  > ::v-deep .card {
    flex: none;
    margin-left: $spacer;
    width: 14em;

    &:first-child {
      margin-left: 0;
    }

    @include sm {
      flex: auto;
    }
  }
}
</style>
