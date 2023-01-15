<template>
  <button
    class="button-filter"
    :class="{ active: active }"
    @click="active = !active"
  >
    <!--       <SvgIcon class="button-filter__image filter" :icon="icons['filter-menu']" />
        <SvgIcon class="button-filter__image filter-change" :icon="icons['filter-change']" /> -->
  </button>
</template>

<script setup>

const active = ref(false);

</script>

<style lang="scss" scoped>
.button-filter {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &.active {
    .button-filter__image.filter {
      display: none;
    }

    .button-filter__image.filter-change {
      display: block;
    }
  }

  &__image {
    width: 32px;
    height: 32px;

    color: #f36c21;

    &.filter-change {
      display: none;
    }
  }
}
</style>