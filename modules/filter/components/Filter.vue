<template>
  <section class="filter">
    <div class="filter__wrapper">
      <h1 class="filter__title">Название категории</h1>
      <nav class="filter__navigation">
        <ButtonFilterMobile
          @click="showFilters"
          class="filter__filter-mobile"
        />
        <ButtonFilter
          class="filter__button-filter"
          @click="activeFilter"
        />
      </nav>
      <section class="filter__header" :class="{ active: mobileFilters }">
        <SelectedFilter
          ref="selectedFilter"
          class="filter__filters"
          :style="{ '--height': heightFilters + 'px' }"
          :items="filterItem"
        />
        <SelectGroup
          class="filter__select"
          :selectList="selectItems"
          :caption="'По умолчанию'"
        />
      </section>
      <CatalogMain :changeView="changeView" :activeFilters="mobileFilters" />
    </div>
  </section>
</template>
  
<script setup>
import SelectedFilter from "~/modules/filter/components/sections/SelectedFilter.vue";
import CatalogMain from "~/modules/filter/components/sections/CatalogMain.vue";
import SelectGroup from "~/modules/filter/components/UI/SelectGroup.vue";
import ButtonFilter from "~/modules/filter/components/UI/ButtonFilter.vue";
import ButtonFilterMobile from "~/modules/filter/components/UI/ButtomFilterMobile.vue";

const selectedFilter = ref(null);

const filterItem = [
  { name: "Евровилка" },
  { name: "1000/900" },
  { name: "1000/900" },
  { name: "700-1200 грн" },
];

const selectItems = [
  { title: "По умолчанию" },
  { title: "Дешёвые" },
  { title: "Дорогие" },
  { title: "Популярные" },
];

const changeView = ref(false);
const activeFilters = ref(false);
const heightFilters = ref(0);
const mobileFilters = ref(false);

function activeFilter() {
  changeView.value = !changeView.value;
}

function showFilters(event) {
  const button = event.currentTarget;

  button.classList.toggle("active");
  mobileFilters.value = mobileFilters.value;

  button.classList.contains("active")
    ? (heightFilters.value = selectedFilter.value.scrollHeight * 2)
    : (heightFilters.value = 0);
}

  /*  getHeightFilters() {
      this.heightFilters = this.$refs.selectedFilter.$el.scrollHeight * 2;
      console.log(this.heightFilters)
    }

    mounted() {
      this.getHeightFilters()
      window.addEventListener('resize', this.getHeightFilters)
    } */
</script>
  
<style lang="scss" scoped>
.filter {
  @extend %padding-wrp;

  &__wrapper {
    @extend %width-main;

    @include flex-container(column, flex-start, flex-start);

    margin: 0 auto;
    padding-bottom: 136px;
    gap: 24px;
  }

  &__title {
    @include font(36, 43, 700);
    color: #2b2b2b;

    @include bigMobile {
      @include font(24, 34, 700);
    }
  }

  &__navigation {
    display: none;

    @include bigMobile {
      @include flex-container(row, space-between, flex-end);

      background-color: white;

      border: 1px solid #d1d1d1;
      border-radius: 8px;

      padding: 16px;
      margin-bottom: 24px;
    }
  }

  &__header {
    width: 100%;

    @include flex-container(row, space-between, flex-end);

    transition: all 0.3s ease-in-out;

    @include bigMobile {
      margin-bottom: 0;
      &.active {
        margin-bottom: 24px;
      }
    }
  }

  &__select {
    max-width: 363px;

    z-index: 101;
  }

  &__button-filter {
    display: none;

    @include bigMobile {
      display: block;
    }
  }

  &__filter-mobile {
    display: none;

    @include bigMobile {
      display: flex;
    }
  }

  &__filters {
    @include bigMobile {
      width: 100%;
      --height: 0;
      height: var(--height);

      overflow: hidden;

      transition: all 0.3s ease-in-out;
    }
  }
}
</style>
        