<template>
  <button class="filter-mobile">
    <!--  <SvgIcon class="filter-mobile__image" :icon="icons['filter']" /> -->
    <span class="filter-mobile__title">Фильтры</span>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.filter-mobile {
  width: max-content;

  @include flex-container(row, center, center);

  border-radius: 4px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: #f36c21;

  gap: 4px;
  padding: 4px 8px;

  &__image {
    width: 24px;
    height: 24px;

    color: white;
  }

  &__title {
    @include font(14, 18, 400);
    letter-spacing: 0.02em;
    color: white;
  }
}
</style>