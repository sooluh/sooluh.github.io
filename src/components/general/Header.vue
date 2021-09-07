<template>
  <header>
    <nav class="container">
      <g-link to="/" class="sooluh"> SOOLUH </g-link>

      <div class="links">
        <g-link to="/articles/">Articles</g-link>
        <g-link to="/projects/">Projects</g-link>
        <g-link to="/about/">About</g-link>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  background: var(--color-d-background);
  color: var(--color-d-primary);
  padding: $spacer;

  .sooluh {
    padding-right: $spacer;
  }
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
  flex-direction: row;
  padding: $spacer 0;
}

.links a {
  text-decoration: none;
  margin: $spacer / 4;
  color: var(--color-d-primary);
  position: relative;
  text-shadow: -2px 0px 0px var(--color-d-background),
    2px 0px 0px var(--color-d-background);
  z-index: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: calc(100% - 0.1em);
    left: 50%;
    width: 0;
    height: 0.05em;
    z-index: -1;
    transition: all 300ms ease-in-out;
    background: var(--color-blue);
  }

  &:hover::before {
    width: 100%;
    left: 0;
  }

  &.active::before {
    width: 100%;
    left: 0;
    background: var(--color-yellow);
  }
}
</style>
