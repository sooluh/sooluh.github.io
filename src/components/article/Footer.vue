<template>
  <div class="article-footer">
    <div class="container">
      <ul class="tags">
        <li v-for="(tag, key) in tags" v-bind:key="key">#{{ tag }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.article-footer {
  padding: $spacer;
}

.container {
  padding: $spacer 0;
}

ul {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
  color: var(--color-secondary);
  font-size: 0.85em;

  li {
    display: inline-block;
    padding: $spacer / 4 $spacer / 2;
    background: var(--color-subtle);
    margin-right: $spacer / 2;
    border-radius: $spacer / 2;
  }
}
</style>
