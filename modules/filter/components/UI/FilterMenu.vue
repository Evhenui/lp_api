<template>
  <div class="filter-menu">
    <h1 class="filter-menu__title">
      <slot></slot>
    </h1>
   <!--  <SvgIcon class="filter-menu__close" :icon="icons['cancel']" /> -->
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.filter-menu {
  @include flex-container(row, space-between, center);

  border-radius: 8px;

  background-color: #f3f3f3;

  padding: 8px;

  &__title {
    @include font(20, 30, 600);
    letter-spacing: 0.02em;
    color: #2b2b2b;
  }

  &__close {
    width: 32px;
    height: 32px;
  }
}
</style>
          