<template>
  <div class="filter-item">
    <span class="filter-item__filter-name">
      <slot></slot>
    </span>
  <!--   <SvgIcon class="filter-item__close" :icon="icons['close']" /> -->
  </div>
</template>
    
<script setup>
</script>
    
<style lang="scss" scoped>
.filter-item {
  @include flex-container(row, flex-start, center);

  border: 1px solid #F36C21;
  border-radius: 8px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  padding: 4px 8px;
  gap: 8px;

  cursor: pointer;

  @include bigMobile {
    padding: 10px 12px;
  }

  &__filter-name {
    @include font(16, 22, 400);
    letter-spacing: 0.02em;
    color: #F36C21;

    @include bigMobile {
      @include font(14, 16, 500);
    }
  }

  &__close {
    width: 24px;
    height: 24px;

    color: #f36c21;

    @include bigMobile {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
          