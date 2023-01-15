<template>
  <header class="card-header">
    <div class="card-header__wrapper">
      <div class="card-header__suggestions">
        <Suggestions v-if="!inactive" :status="typeAvailability.novelty" />
      </div>
      <HeaderButtons />
    </div>
  </header>
</template>

<script setup>
import HeaderButtons from "~/modules/filter/components/sections/cardProduct/sections/HeaderButtons.vue";
import Suggestions from "~/modules/filter/components/sections/cardProduct/UI/Suggestions.vue";

const props = defineProps({
  inactive: { type: Boolean, required: false },
});

const typeAvailability = {
  novelty: "novelty",
  stock: "stock",
  sales: "top-sales",
};
</script>

<style lang="scss" scoped>
.card-header {
  &__wrapper {
    @include flex-container(row, space-between, flex-start);

    padding: 0 16px;

    @include bigMobile {
      padding: 0 8px;
    }
  }

  &__suggestions {
    @include flex-container(column, flex-start, flex-start);

    gap: 4px;
  }
}
</style>
    