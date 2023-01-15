<template>
  <section class="catalog-list">
    <div class="catalog-list__wrapper">
      <div class="catalog-list__items">
        <CardProduct
          class="catalog-list__item"
          v-for="(item, index) in cardItemsNovelties"
          :key="index"
          :values="item"
          :changeView="changeView"
        />
      </div>
      <nav class="catalog-list__navigation">
        <ButtonShowMore />
        <div class="catalog-list__pagination">
          <ButtonPrev />
          <div class="catalog-list__pages">
            <ButtonPage 
              v-for="(item, index) in 3"
              :key="index"
            >{{ index }}</ButtonPage>
          </div>
          <ButtonNext />
        </div>
      </nav>
    </div>
    <FooterCatalog />
  </section>
</template>

<script setup>
/* import CardProduct from "~/modules/filter/components/sections/cardProduct/CardProduct.vue"; */
import CardProduct from "~/modules/home/components/regularSliders/card/CardProduct.vue";
import ButtonShowMore from "~/modules/filter/components/UI/ButtonShowMore.vue";
import ButtonPrev from "~/modules/filter/components/UI/ButtonPrev.vue";
import ButtonNext from "~/modules/filter/components/UI/ButtonNext.vue";
import ButtonPage from "~/modules/filter/components/UI/ButtonPage.vue";
import FooterCatalog from "~/modules/filter/components/sections/FooterCatalog.vue";

const props = defineProps({
  changeView: { type: Boolean, required: false},
});

const cardItemsNovelties = [
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
  {
    suggestions: ["novelty"],
    image: "product-card",
    rating: {
      points: "4",
      reviews: "125",
    },
    statusValues: {
      buttonStatus: "in-stock",
      delivery: true,
      credit: true,
    },
    nameProduct:
      "Акумулятор гелевий LPN-GL 12V - 200 Ah (JAPAN) GL 12V - 200 Ah (JAPAN)",
    code: "56983",
    prices: {
      button: "buy",
      price: {
        discount: "",
        total: "500 ₴",
      },
    },
    inactive: false,
  },
];

</script>

<style lang="scss" scoped>
.catalog-list {
  &__wrapper {
    @include flex-container(column, flex-start);

    gap: 64px;
    margin-bottom: 64px;
  }

  &__items {
    @include flex-container(row, space-between);
    flex-wrap: wrap;

    gap: 8px;
  }

  &__item {
    --gap: 8px;
    width: 100%;

    flex: 0 0 auto;

    @include set-item-count-in-row(4);

    @include smallestScreen {
      @include set-item-count-in-row(3);
    }

    @include bigMobile {
      @include set-item-count-in-row(4);
    }

    @include mobile {
      @include set-item-count-in-row(2);
    }
  }

  &__navigation {
    @include flex-container(column, center, center);

    gap: 32px;
  }

  &__pagination {
    @include flex-container(row, center, center);

    gap: 26px;
  }

  &__pages {
    @include flex-container(row, center, center);

    gap: 26px;
  }
}
</style>
          