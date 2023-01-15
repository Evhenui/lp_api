<template>
  <button class="button-orange">
    <span class="button-orange__title">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.button-orange {
  max-width: 80px;
  width: 100%;

  @include flex-container(row, center, center);

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  border-radius: 6px;
  background-color: #F36C21;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  padding: 8px;

  @include mobile {
    max-width: 100%;
  }

  &:hover {
    background-color: #ff5b00;
  }

  &:active {
    background-color: #ac450b;
  }

  &:disabled {
    background-color: #8a8a8a;
  }

  &__title {
    @include font(12, 16, 400);
    color: white;
    letter-spacing: 0.02em;
  }
}
</style>
  