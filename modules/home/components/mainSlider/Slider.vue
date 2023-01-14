<template>
  <article class="main-slider">
    <div class="main-slider__wrapper">
      <div class="main-slider__slider">
        <div
          class="main-slider__slides"
          ref="sliderWidth"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
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
            :class="{active: index === counter}"
            v-for="(slide, index) in slideList"
            :key="index"
            @click="activePagination(index)"
          />
        </ul>
      </div>

      <div class="main-slider__buttons">
        <PaginationBtnArrow @click="prevSlide" :directionRight="false" />

        <PaginationBtnArrow :directionRight="true" @click="nextSlide" />
      </div>
    </div>
  </article>
</template>

<script setup>
import { useHeaderStore } from "~~/store/headerStore";
import PaginationBtnArrow from "~/modules/home/components/UI/PaginationBtnArrow.vue";
import consolaGlobalInstance from "consola";

const header = useHeaderStore();
const headerHeight = header.getHeightHeader;

const sliderWidth = ref(null);

const paddingTop = ref(0);
const bgColor = ref("black");

const counter = ref(0);
const sliderLength = ref(0);
const slideWidth = ref(0);
const translateX = ref(0);
const translateXVar = ref("");

const activeTouches = ref(false);
const mobileTranslateX = ref(0);
const startPosition = ref(0);
const difference = ref(0);

const intervalID = ref(-1);

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

function getSliderValues() {
  sliderLength.value = slideList.length;
  slideWidth.value = sliderWidth.value.scrollWidth / sliderLength.value;
  bgColor.value = slideList[0].backgroundColor;

  actualTransition();
}

function actualTransition() {
  translateX.value = slideWidth.value * counter.value;
  translateXVar.value = `-${translateX.value}px`;
}

function startInterval() {
  setInterval(nextSlide, 3000);
}

function prevSlide() {
  if (counter.value > 0) {
    counter.value--;
    translateX.value = slideWidth.value * counter.value;
  } else {
    counter.value = sliderLength.value - 1;
    translateX.value = counter.value * slideWidth.value;
  }

  bgColor.value = slideList[counter.value].backgroundColor;
  translateXVar.value = `-${translateX.value}px`;
}

function nextSlide() {
  if (counter.value < sliderLength.value - 1) {
    counter.value++;
    translateX.value = slideWidth.value * counter.value;
  } else {
    counter.value = 0;
    translateX.value = 0;
  }
  bgColor.value = slideList[counter.value].backgroundColor;
  translateXVar.value = `-${translateX.value}px`;
}

function activePagination(index) {
  counter.value = index;
  translateX.value = slideWidth.value * counter.value;
  translateXVar.value = `-${translateX.value}px`;
}

function handleTouchStart(event) {
  if (window.innerWidth < 1024) {
    activeTouches.value = true;
    mobileTranslateX.value = event.touches[0].clientX;
    startPosition.value = event.touches[0].clientX;
  }
}

function handleTouchMove(event) {
  if (window.innerWidth < 1024) {
    const positionMove = event.touches[0].clientX;
    const diff = positionMove - mobileTranslateX.value;
    const fingerSpace = 30;

    if (
      startPosition.value - positionMove < fingerSpace &&
      startPosition.value - positionMove > -fingerSpace
    ) {
      return false;
    } else {
      if (activeTouches.value) {
        if (!mobileTranslateX.value) return false;

        difference.value = diff;
        difference.value > 0 ? prevSlide() : nextSlide();

        mobileTranslateX.value = null;
      }
    }
  }
}

function handleTouchEnd() {
  if (window.innerWidth < 1024) {
    activeTouches.value = false;
  }
}

function endInerval(interval) {
  clearInterval(interval)
}

watch(counter, (val) => {
  endInerval(intervalID.value)

  intervalID.value = setInterval(nextSlide, 5000);
})

onMounted(() => {
  getSliderValues();

  window.addEventListener("resize", getSliderValues);
});

onUnmounted(() => {
  window.removeEventListener("resize", getSliderValues);
});
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

    @include bigMobile {
      padding-top: 88px;
      gap: 48px;
    }
  }

  &__slider {
    @extend %width-main;

    overflow: hidden;
  }

  &__slides {
    @include flex-container(row, flex-start, center);

    transform: translateX(v-bind(translateXVar));

    transition: transform 0.5s ease-in-out;
  }

  &__slide {
    flex: 0 0 100%;

    padding: 0 64px;

    @include bigMobile {
      padding: 0 16px;
    }
  }

  &__slide-wrapper {
    max-width: 1130px;
    width: 100%;

    position: relative;

    margin: auto;
  }

  &__main-info {
    max-width: 590px;
    width: 100%;

    @include flex-container(column, flex-start, flex-start);

    gap: 16px;

    @include bigMobile {
      max-width: 100%;

      @include flex-container(column, center, center);

      gap: 24px;
    }
  }

  &__title {
    @include font(36, 43, 700);
    color: white;

    @include bigMobile {
      @include font(24, 34, 700);
      letter-spacing: 0.02em;
      text-align: center;
    }
  }

  &__image {
    max-width: 404px;
    width: 100%;

    position: absolute;
    top: 50%;
    right: 0;

    transform: translateY(-50%);

    padding: 48px 62px;

    @include bigMobile {
      max-width: 219px;

      position: static;

      transform: translateY(0);

      padding: 0;
    }
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

    @include bigMobile {
      @include font(16, 24);
      align-self: flex-start;
    }

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

    @include bigMobile {
      width: 12px;
      height: 12px;
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
      display: none;
    }
  }
}
</style>