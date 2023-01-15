<template>
  <button class="button-page">
    <span class="button-page__number">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.button-page {
  width: 47px;
  height: 47px;

  @include flex-container(column, center, center);

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  background-color: white;

  box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.2);
  border-radius: 50px;

  &.active &__number {
    color: #f36c21;
  }

  &__number {
    @include font(20, 30, 600);
    text-transform: uppercase;
    color: #2b2b2b;
  }
}
</style>
      