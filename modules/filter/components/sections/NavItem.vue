<template>
  <div class="nav-item" :class="{ open: !values.title }">
    <div 
      @click="activeFilter" 
      class="nav-item__header" 
      v-if="values.title"
    >
      <h1 class="nav-item__title">{{ values.title }}</h1>
      <div class="nav-item__arrow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9.125L12 14.875L18 9.125"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div
      ref="filterBody"
      class="nav-item__body"
      :class="[
        { 'price-control': values.priceControl },
        ]"
    >
      <FilterPriceControl v-if="values.priceControl" />

      <CheckBox
        class="nav-item__checkbox"
        v-for="(item, index) in values.checkboxes"
        :key="index"
        >{{ item }}
      </CheckBox>

      <ShowAll @click="showAll" v-if="values.checkboxes.length > 6" />
    </div>
  </div>
</template>

<script setup>
import FilterPriceControl from "~/modules/filter/components/UI/FilterPriceControl.vue";
import CheckBox from "~/modules/filter/components/UI/CheckBox.vue";
import ShowAll from "~/modules/filter/components/UI/ShowAll.vue";

const props = defineProps({
  values: { type: Object, required: true },
});

const checkboxes = reactive({
  suggestions: {
    stock: false,
    novelty: false,
    topSales: false,
  },
  priceControl: {
    difference: "",
  },
  power: {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  },
  networkConnection: {
    item1: false,
    item2: false,
  },
  upsConnection: {
    item1: false,
    item2: false,
  },
});

const filterBody = ref(null);

const initialHeight = ref(0);
const heightContent = ref('0');
const showFilters = ref(false);
const showFilter = ref(false);

function activeFilter(event) {
  showFilters.value = !showFilters.value;
  const bodySection = event.currentTarget.nextElementSibling;

  event.currentTarget.classList.toggle("active");

  if (event.currentTarget.classList.contains("active")) {
    heightContent.value = `${bodySection.scrollHeight}px`;
  } else {
    heightContent.value = `${0}px`;
  }
}

function getInitialHeight() {
  initialHeight.value = filterBody.value.scrollHeight;
}

function showAll() {
  showFilter.value = !showFilter.value;
  filterBody.value.classList.toggle("active");

  heightContent.value = showFilter.value? `${filterBody.value.scrollHeight}px` : `${initialHeight.value}px`
}

onMounted(() => {
  getInitialHeight();
});
</script>

<style lang="scss" scoped>
.nav-item {
  border-bottom: 1px solid #d1d1d1;

  padding: 16px 8px;

  &:last-child {
    border: none;

    padding-bottom: 0;
  }

  &.open {
    border-bottom: 1px solid #d1d1d1;

    padding: 0 16px 16px 16px;
    .nav-item__body {
      height: 100%;
    }
  }

  &__header {
    @include flex-container(row, space-between, center);

    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    cursor: pointer;

    transition: margin-bottom 0.2s ease-in-out;

    &.active {
      margin-bottom: 8px;

      .nav-item__arrow {
        transform: rotateZ(180deg);
      }
    }
    &.price-control.active {
      margin-bottom: 16px;
    }
  }

  &__title {
    @include font(16, 22, 400);
    color: #2b2b2b;
    letter-spacing: 0.02em;
  }

  &__arrow {
    font-size: 0;

    flex: 0 0 auto;

    transition: transform 0.2s ease-in-out;
  }

  &__body {
/*     --height: 0;
    height: var(--height); */
    height: v-bind(heightContent);

    padding: 0 8px;

    transition: height 0.2s ease-in-out;

    overflow: hidden;

    &.price-control {
      padding: 0;
    }

    &.active {
      .nav-item__checkbox:nth-child(n + 6) {
        display: block;
      }
    }
    .nav-item__checkbox {
      &:nth-child(n + 6) {
        display: none;
      }
    }
  }
}
</style>