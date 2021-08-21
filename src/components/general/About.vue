<template>
  <section>
    <div class="container">
      <div class="about">
        <g-image
          width="144"
          alt="Suluh Sulistiawan"
          src="~/assets/images/me.jpg"
        />

        <h3>Kenalin</h3>
        <p>
          Aku <span class="special">Suluh Sulistiawan</span>; seorang pengembang
          web (indie), petualang teknologi, dan penikmat kopi luwak. Engga
          terlalu ngerti desain, tapi bisa lah bikin mata pengguna adem.
        </p>

        <Social class="social" />
      </div>
    </div>
  </section>
</template>

<script>
import Social from "~/components/general/Social.vue";

export default {
  components: {
    Social,
  },
};
</script>

<style lang="scss" scoped>
section {
  background: var(--color-d-background);
  color: var(--color-d-primary);
  padding: $spacer;
}

.special {
  color: var(--color-yellow);
}

.about {
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  grid-template-areas: "I I" "T T" "P P" "S S";
  justify-items: center;
  align-items: center;
  grid-gap: $spacer;

  @include sm {
    justify-items: flex-start;
    grid-template-areas: "I T" "I P" "I S";
  }

  ::v-deep .social {
    grid-area: S;
  }
}

img {
  grid-area: I;
  width: 4 * $spacer;
  height: 4 * $spacer;
  border-radius: 100%;

  @include sm {
    margin-right: $spacer;
    width: 8 * $spacer;
    height: 8 * $spacer;
  }
}

h3 {
  grid-area: T;
  font-size: 1.5rem;
}

p {
  grid-area: P;
  text-align: center;
  margin: 0;

  @include sm {
    text-align: left;
  }
}
</style>
