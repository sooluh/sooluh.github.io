<template>
  <Layout>
    <Title title="Page Not Found" />

    <article>
      <div class="container">
        <div>
          <g-image src="~/assets/images/404.svg" />
          <p class="text-center">
            Tersesat! oh Tersesat! Astaghfirullah!
          </p>
        </div>
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

<script>
import Title from "~/components/general/Title.vue";

export default {
  components: {
    Title,
  },
  metaInfo() {
    const title = `Page Not Found - ${this.$static.metadata.siteName}`;

    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }],
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_articles.scss";

article img {
  box-shadow: unset;
}

.text-center {
  text-align: center;
}
</style>
