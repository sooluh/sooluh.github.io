<template>
  <div class="site">
    <Header />

    <main>
      <slot />
    </main>

    <About />

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/general/Header.vue";
const About = () => import("~/components/general/About.vue");
import Footer from "~/components/general/Footer.vue";

export default {
  components: {
    Header,
    Footer,
    About,
  },
};
</script>

<style scoped>
.site {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>
