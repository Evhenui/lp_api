<template>
  <article class="main-slider">
    <div class="main-slider__wrapper">
      <div class="main-slider__slider">
        <div class="main-slider__slides">
          <div
            class="main-slider__slide"
            v-for="(item, index) in slideList"
            :key="index"
          >
            <div class="main-slider__slide-wrapper">
              <div class="main-slider__main-info">
                <a href="#" class="main-slider__title">{{ item.title }}</a>

                <div class="main-slider__image">
                  <img :src="item.image" alt="product name" />
                </div>

                <p class="main-slider__subtitle">{{ item.content }}</p>

                <a href="#" class="main-slider__details">{{
                  item.buttonText
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-slider__pagination">
        <ul class="main-slider__nav">
          <li
            class="main-slider__nav-item"
            v-for="(slide, index) in slideList"
            :key="index"
          />
        </ul>
      </div>

      <div class="main-slider__buttons">
        <PaginationBtnArrow
          @click="prevSlide"
          :directionRight="false"
          :disabled="counter === 0 ? true : false"
        />

        <PaginationBtnArrow
          :directionRight="true"
          @click="nextSlide"
          :disabled="buttonDisabled"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
import PaginationBtnArrow from "~/modules/home/components/UI/PaginationBtnArrow.vue";

const bgColor = ref("#393D38");

const slideList = [
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/2ltaWF07s0nzDneVRsBS9/7c1c11394df6be85eb7590966337b8d6/Banner_new_B2B_-349552_-363636.png",
    backgroundColor: "#393D38",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/4Va4aWBR80jjY1hZrjsZHA/833bad1bdf1d1d856aff6853fa125c51/Banner_new_B2B-7.png",
    backgroundColor: "#273d22",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/2ltaWF07s0nzDneVRsBS9/7c1c11394df6be85eb7590966337b8d6/Banner_new_B2B_-349552_-363636.png",
    backgroundColor: "#393D38",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
  },
  {
    title: "Аккумуляторна батарея LP 400PZS — 280 AH4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.ctfassets.net/ql2dtx28kmvf/4Va4aWBR80jjY1hZrjsZHA/833bad1bdf1d1d856aff6853fa125c51/Banner_new_B2B-7.png",
    backgroundColor: "#273d22",
    url: "",
    buttonText: "Подробнее",
    titleAndBtnColor: "",
  },
];
</script>

<style lang="scss" scoped>
.main-slider {
  background-color: v-bind(bgColor);

  transition: background-color 0.4s ease-in-out;

  &__wrapper {
    @extend %width-main;

    position: relative;

    @include flex-container(column, center, center);

    margin: auto;
    padding: 24px 0;
  }

  &__slider {
    @extend %width-main;

    overflow: hidden;
  }

  &__slides {
    @include flex-container(row, flex-start, center);
  }

  &__slide {
    flex: 0 0 100%;
  }

  &__slide-wrapper {
    position: relative;
  }

  &__main-info {
    max-width: 590px;
    width: 100%;

    @include flex-container(column, flex-start, flex-start);

    gap: 16px;
  }

  &__title {
    @include font(36, 43, 700);
    color: white;
  }

  &__image {
    max-width: 404px;
    width: 100%;

    position: absolute;
    top: 0;
    right: 0;

    padding: 48px 62px;

    background-color: rgba(0,0,0,.1);
   background-image: linear-gradient(#F36C21 5vw, transparent 5vw, transparent 15vw, #F36C21 15vw),
                     linear-gradient(90deg, #F36C21 5vw, transparent 5vw, transparent 15vw, #F36C21 15vw),
                     linear-gradient(#F36C21 5vw, transparent 5vw, transparent 15vw, #F36C21 15vw),
                     linear-gradient(90deg, #F36C21 5vw, transparent 5vw, transparent 15vw, #F36C21 15vw);
   background-size: 5px 20vw, 20vw 5px, 5px 20vw, 20vw 5px;
   background-position: 0 0, 0 0, 100% 100%, 100% 100%;
   background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
  }

  &__subtitle {
    @include font(16, 22, 400);
    color: white;
    letter-spacing: 0.02em;
  }

  &__details {
    position: relative;

    @include font(18, 24);
    letter-spacing: 0.02em;
    color: #f36c21;

    &:after {
      content: "";

      width: 0;
      height: 1px;

      position: absolute;
      left: 0;
      bottom: 0;

      background-color: #f36c21;

      transition: width 0.2s ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  &__pagination {
  }

  &__nav {
    @include flex-container(row, flex-start, center);

    gap: 16px;
  }

  &__nav-item {
    width: 20px;
    height: 20px;

    background-color: white;
    border-radius: 50%;

    cursor: pointer;

    transition: background-color 0.2s ease-in-out;

    &.active {
      background-color: #f36c21;
    }
  }

  &__buttons {
    width: 100%;

    @include flex-container(row, space-between, center);

    position: absolute;
    top: 50%;
    z-index: 80;

    transform: translateY(-50%);

    @include bigMobile {
      @include flex-container(row, center, center);

      position: static;

      gap: 68px;

      transform: translateY(0);
    }
  }
}
</style>