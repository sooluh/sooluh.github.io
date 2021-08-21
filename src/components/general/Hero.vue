<template>
  <section>
    <div class="hero-wrap">
      <div class="container hero">
        <div class="focus">
          <p class="title">Hai! Aku <span class="special">Suluh</span>,</p>
          <p>seorang pengembang web.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  position: relative;
  color: var(--color-d-primary);
  background: var(--color-d-background);
  overflow: hidden;
}

.hero {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.hero-wrap {
  position: relative;
  padding: 0 $spacer;
  height: 15em;

  @include sm {
    height: 20em;
  }
}

.aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.focus {
  font-size: 1em;
  width: 66%;
  z-index: 0;

  .title {
    font-size: 1.75em;
  }

  .special {
    position: relative;
    color: var(--color-yellow);
    white-space: nowrap;
  }

  p {
    margin: 0;
    z-index: 5;
  }

  @include sm {
    font-size: 1.25em;
  }

  @include lg {
    font-size: 1.5em;
  }
}

.extra {
  width: 34%;
}
</style>
