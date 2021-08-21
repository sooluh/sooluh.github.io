<template>
  <div class="article-footer">
    <div class="container">
      <div class="post-comments">
        <Disqus shortname="suluh" :title="props.title" />
      </div>
    </div>
  </div>
</template>

<script>
import { Disqus } from "vue-disqus";

export default {
  components: {
    Disqus,
  },
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
