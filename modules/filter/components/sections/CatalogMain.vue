<template>
  <section class="main" :class="{ active: activeFilters }">
    <NavigationBar :activeFilters="activeFilters" />
    <CatalogList class="main__catalog-list" :changeView="changeView" />
  </section>
</template>

<script setup>
import NavigationBar from "~/modules/filter/components/sections/NavigationBar.vue";
import CatalogList from "~/modules/filter/components/sections/CatalogList.vue";
import SelectedFilter from "~/modules/filter/components/sections/SelectedFilter.vue";

const props = defineProps({
 changeView: { type: Boolean, required: false},
 activeFilters: { type: Boolean, required: false},
});

</script>

<style lang="scss" scoped>
.main {
  @include flex-container(row, flex-start, flex-start);

  gap: 8px;

  @include bigMobile {
    @include flex-container(column, flex-start, flex-start);

    gap: 0;

    &.active {
      gap: 8px;

      .main__catalog-list {
        display: none;
      }
    }
  }

  &__selected {
    display: none;

    @include bigMobile {
      width: 100%;

      display: flex;
    }
  }
}
</style>
            