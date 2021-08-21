<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    const title = this.$static.metadata.siteName;
    const description = this.$static.metadata.siteDescription;
    const url = this.$static.metadata.siteUrl;

    return {
      title: title,
      meta: [
        {
          key: "description",
          name: "description",
          content: description,
        },
        { name: "og:title", key: "og:title", content: title },
        { name: "og:type", key: "og:type", content: "website" },
        {
          name: "og:description",
          key: "og:description",
          content: description,
        },
        { name: "og:url", key: "og:url", content: url },
      ],
    };
  },
};
</script>
