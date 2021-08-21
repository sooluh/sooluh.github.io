<template>
  <Layout>
    <Hero />

    <Pinned />

    <Recent />
  </Layout>
</template>

<script>
import Hero from "~/components/general/Hero.vue";
import Pinned from "~/components/project/Pinned.vue";
import Recent from "~/components/article/Recent.vue";

export default {
  components: {
    Hero,
    Pinned,
    Recent,
  },
  metaInfo() {
    const title = "Suluh Sulistiawan - Backend Developer";

    return {
      title,
      meta: [{ name: "og:title", key: "og:title", content: title }],
    };
  },
};
</script>
