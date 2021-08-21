<template functional>
  <div class="article-header">
    <div class="container">
      <div class="meta">
        {{ props.timeToRead }} menit baca &#8226; {{ props.date }}
      </div>

      <h1>{{ props.title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    timeToRead: {
      type: Number,
      default: -1,
    },
    date: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.meta {
  margin-bottom: $spacer / 2;
  font-size: 0.85rem;
  color: var(--color-d-secondary);
}

.article-header {
  padding: $spacer;
  background: var(--color-d-background);
  color: var(--color-d-primary);
}

.text {
  padding: $spacer;
}

h1 {
  font-size: 1.5 * $spacer;
}
</style>
