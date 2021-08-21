<template functional>
  <g-link
    :class="[data.class, data.staticClass]"
    :aria-label="`Detail Proyek ${props.title}`"
    :to="props.url || props.path"
    class="card"
  >
    <g-image
      :alt="`${props.title} - ${props.summary}`"
      :src="props.image"
      :size="350"
      class="card-img"
    />

    <div class="card-body">
      <h3>{{ props.title }}</h3>
      <p>{{ props.summary }}</p>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Untitled",
    },
    path: {
      type: String,
      default: "",
    },
    summary: {
      type: String,
      default: "Unknown Summary",
    },
    image: {
      type: Object,
      default() {
        return {};
      },
    },
    url: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  display: block;
}

p {
  margin: 0;
  margin-top: $spacer / 2;
  color: var(--color-secondary);
}
</style>
