<template>
  <section class="selected-filters">
    <h3 class="selected-filters__title">Выбранные фильтры:</h3>
    <FilterMenu class="selected-filters__mobile-title">Фильтры</FilterMenu>
    <ul class="selected-filters__filters">
      <li
        class="selected-filters__filter"
        v-for="(item, index) in items"
        :key="index"
      >
        <FilterItem>{{ item.name }}</FilterItem>
      </li>
    </ul>
  </section>
</template>
    
<script setup>
import FilterItem from "~/modules/filter/components/UI/FilterItem.vue"
import FilterMenu from "~/modules/filter/components/UI/FilterMenu.vue"

const props = defineProps({
  items: { type: Array, required: true},
});

</script>
    
<style lang="scss" scoped>
.selected-filters {
  @include flex-container(column, center, left);

  gap: 16px;

  @include bigMobile {
    gap: 24px;
  }

  &__title {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #2b2b2b;

    @include bigMobile {
      display: none;
    }
  }

  &__mobile-title {
    display: none;

    @include bigMobile {
      width: 100%;

      display: flex;
    }
  }

  &__button-filter {
    display: none;

    @include bigMobile {
      display: flex;
    }
  }

  &__filters {
    @include flex-container(row, flex-start, center);
    flex-wrap: wrap;

    gap: 16px;

    @include bigMobile {
    }
  }
}
</style>
        