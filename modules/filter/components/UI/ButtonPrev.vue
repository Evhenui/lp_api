<template>
  <button class="button-prev">
    <!-- <SvgIcon class="button-prev__image" :icon="icons['nav-arrow-left']" /> -->
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.button-prev {
  width: 48px;
  height: 48px;

  @include flex-container(column, center, center);

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 50px;

  background-color: white;

  &__image {
    width: 24px;
    height: 24px;

    color: #2b2b2b;
  }
}
</style>
      