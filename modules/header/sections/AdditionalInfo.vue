<template>
  <div class="additional-info" ref="additional">
    <div class="additional-info__wrapper">
      <div class="additional-info__section">
        <a href="tel:0800309988" class="additional-info__call">
          <div class="additional-info__image">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4763 16.3914L16.4302 13.6982C16.1829 13.5346 15.8827 13.47 15.5896 13.5175C15.2966 13.565 15.0323 13.7211 14.8498 13.9545L13.6697 15.4671C13.5947 15.5634 13.4878 15.63 13.3681 15.6548C13.2484 15.6796 13.1237 15.6611 13.0164 15.6026L12.7951 15.4797C11.4719 14.7595 10.2788 13.8236 9.26542 12.7109C8.15156 11.695 7.21191 10.5042 6.48376 9.18585L6.36787 8.96108C6.30619 8.85641 6.285 8.73288 6.30829 8.61372C6.33157 8.49456 6.39772 8.388 6.4943 8.31406L8.01157 7.13869C8.24426 6.95583 8.4002 6.69304 8.44891 6.40168C8.49762 6.11033 8.4356 5.81134 8.27498 5.56313L5.56708 1.52339C5.40056 1.2723 5.14317 1.09506 4.84864 1.02871C4.55412 0.962354 4.24526 1.01202 3.9866 1.16733L2.29024 2.18303C1.76061 2.49686 1.37208 3.00146 1.20494 3.59263C0.593823 5.80891 1.05743 9.63437 6.70501 15.2696C11.1936 19.7515 14.5337 20.9563 16.8306 20.9563C17.3608 20.9596 17.8889 20.891 18.4006 20.7525C18.9933 20.5834 19.4985 20.1944 19.8125 19.6654L20.8335 17.9775C20.9883 17.7183 21.0376 17.4099 20.9711 17.1156C20.9047 16.8213 20.7276 16.5636 20.4763 16.3956V16.3914Z"
                stroke="#393D38"
                stroke-width="2"
              />
            </svg>
          </div>
          <span class="additional-info__item-name">0800309988</span>
        </a>
        <!-- <a href="#" class="additional-info__location">
          <div class="additional-info__image">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2_75)">
                <path
                  d="M15.832 8.33301C15.832 14.1663 8.33203 19.1663 8.33203 19.1663C8.33203 19.1663 0.832031 14.1663 0.832031 8.33301C0.832031 6.34388 1.62221 4.43623 3.02873 3.02971C4.43525 1.62318 6.34291 0.833008 8.33203 0.833008C10.3212 0.833008 12.2288 1.62318 13.6353 3.02971C15.0419 4.43623 15.832 6.34388 15.832 8.33301Z"
                  stroke="#393D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.33203 10.833C9.71274 10.833 10.832 9.71372 10.832 8.33301C10.832 6.9523 9.71274 5.83301 8.33203 5.83301C6.95132 5.83301 5.83203 6.9523 5.83203 8.33301C5.83203 9.71372 6.95132 10.833 8.33203 10.833Z"
                  stroke="#393D38"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_75">
                  <rect width="16.6667" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span class="additional-info__item-name">????????????</span>
        </a> -->
      </div>
      <ul class="additional-info__menu-items">
        <li
          class="additional-info__menu-item"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <a href="#" class="additional-info__menu-item-name">{{ item }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useHeaderStore } from "~~/store/headerStore";

const emits = defineEmits(["getHeightAdditional"]);

const additional = ref(null);

const header = useHeaderStore();
const menuItems = header.getMenuItems;

function getHeight() {
  emits("getHeightAdditional", additional.value.scrollHeight);
}

onMounted(() => {
  getHeight();
  window.addEventListener("resize", getHeight);
});
</script>

<style lang="scss" scoped>
.additional-info {
  background-color: white;

  padding: 4px 16px;
  &__wrapper {
    @extend %width-main;

    @include flex-container(row, space-between, center);

    margin: 0 auto;
  }

  &__section {
    @include flex-container(row, flex-start, center);

    gap: 64px;
  }

  &__call,
  &__location {
    @include flex-container(row, flex-start, center);

    gap: 8px;
  }

  &__image {
    & svg {
      & path {
        stroke: var(--color-primary-base);
      }
    }
  }

  &__item-name {
    @include font(18, 24, 700);
    color: var(--color-primary-base);
  }

  &__menu-items {
    @include flex-container(row, flex-start, center);

    gap: 48px;
  }

  &__menu-item {
  }

  &__menu-item-name {
    @include font(14, 16, 400);
    color: #393d38;

    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary-base);
    }
  }
}
</style>
