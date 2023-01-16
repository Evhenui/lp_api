<template>
  <aside class="navigation" :class="{ active: activeFilters }">
    <NavItem 
      v-for="(item, index) in filters"
      :key="index"
      :values="item"
    />
  </aside>
</template>

<script setup>
import FilterPriceControl from "~/modules/filter/components/UI/FilterPriceControl.vue";
import ShowAll from "~/modules/filter/components/UI/ShowAll.vue";
import CheckBox from "~/modules/filter/components/UI/CheckBox.vue";
import NavItem from "~/modules/filter/components/sections/NavItem.vue";

const props = defineProps({
  activeFilters: { type: Boolean, required: false },
});

const filterPower = ref(null);

const filters = reactive([
  {name: 'suggestions', title: '', checkboxes: ['Акции', 'Новинки', 'Топ продаж']},
  {name: 'priceControl', title: 'Цена', checkboxes: [], priceControl: true},
  {name: 'power', title: 'Мощность VA/W', checkboxes: ['1000/900 (43)', '1000/900 (43)', '1000/900 (43)','1000/900 (43)', '1000/900 (43)', '1000/900 (43)','1000/900 (43)', '1000/900 (43)', '1000/900 (43)'], buttonMore: true},
  {name: 'networkConnection', title: 'Тип подключения к сети', checkboxes: ['Евровилка (43)', 'Клеммы (43)']},
  {name: 'upsConnection', title: 'Тип подключения нагрузки к ИБП', checkboxes: ['IEC320 C13 (43)', 'Клеммы (43)']},
]);

</script>

<style lang="scss" scoped>
.navigation {
  flex: 1 0 256px;

  background-color: white;

  border: 1px solid #e9e9e9;
  border-radius: 8px;

  padding: 16px 0;

  @include bigMobile {
    width: 100%;

    height: 0;

    flex: auto;

    border: none;

    padding: 0;

    overflow: hidden;
    visibility: hidden;

    &.active {
      height: auto;

      border: 1px solid #e9e9e9;

      padding: 16px 0;

      visibility: visible;
    }
  }

  &__status {
    border-bottom: 1px solid #d1d1d1;

    padding: 0 16px 16px 16px;
  }

  &__filter {
    border-bottom: 1px solid #d1d1d1;

    padding: 16px 8px;

    &:last-child {
      border: none;

      padding-bottom: 0;
    }
  }

  &__filter-header {
    @include flex-container(row, space-between, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    cursor: pointer;

    transition: margin-bottom 0.2s ease-in-out;

    &.active {
      margin-bottom: 8px;
    }
    &.active .navigation__arrow {
      transform: rotateZ(180deg);
    }
    &.price-control.active {
      margin-bottom: 16px;
    }
  }

  &__filter-name {
    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }

  &__arrow {
    font-size: 0;

    flex: 0 0 auto;

    transition: transform 0.2s ease-in-out;
  }

  &__filter-body {
    --height: 0;
    height: var(--height);

    padding: 0 8px;

    transition: height 0.2s ease-in-out;

    overflow: hidden;

    &.price-control {
      padding: 0;
    }

    &.active {
      .navigation__filter-item:nth-child(n + 3) {
        display: block;
      }
    }
    .navigation__filter-item {
      &:nth-child(n + 3) {
        display: none;
      }
    }
  }
}
</style>
          