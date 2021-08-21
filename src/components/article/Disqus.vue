<template>
  <div class="article-footer">
    <div class="container">
      <div class="post-comments">
        <Disqus :title="props.title" />
      </div>
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
</style>
