<template functional>
  <footer>
    <ul class="container footer">
      <li class="left">
        &copy; Suluh Sulistiawan
        {{ new Date().getFullYear() }}
      </li>

      <li class="center">
        <g-link to="/"><div class="sooluh">S</div></g-link>
      </li>

      <li class="right">
        Powered by
        <a href="https://gridsome.org/" target="_blank" rel="noindex, nofollow">
          Gridsome
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: $spacer;
  background: var(--color-d-background);
  color: var(--color-d-secondary);
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @include sm {
    flex-direction: row;
  }

  padding: 0;
  list-style: none;
}

.center > a {
  text-decoration: none;
}

.left,
.right {
  font-size: 0.875em;
  text-align: center;

  @include sm {
    width: 50%;
  }
}

.center {
  padding: 0 $spacer;
  display: none;

  @include sm {
    display: block;
  }
}

@include sm {
  .right {
    text-align: right;
  }

  .left {
    text-align: left;
  }
}
</style>
