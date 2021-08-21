<template functional>
  <g-link
    :class="[data.class, data.staticClass]"
    :aria-label="`Menuju ke ${props.title}`"
    :href="props.url"
    class="card"
  >
    <div class="card-body">
      <div class="titlebar">
        <h3>{{ props.title }}</h3>
      </div>

      <p v-if="props.caption" class="caption">
        {{ props.caption }}
      </p>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    caption: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped>
.titlebar {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

a {
  text-decoration: none;
  display: block;

  &:hover h2 {
    text-decoration: underline;
  }
}

.caption {
  margin: 0;
  margin-top: $spacer / 2;
  color: var(--color-secondary);
}
</style>
