<template>
  <nav class="availability">
    <ButtonStatus
      :status="status.buttonStatus.inStock"
      :changeView="changeView"
      :inactive="inactive"
    />
    <div class="availability__suggestions">
      <Delivery :inactive="inactive" />
      <Credit :inactive="inactive" />
    </div>
  </nav>
</template>

<script setup>
import Credit from "~/modules/filter/components/sections/cardProduct/UI/Credit.vue";
import Delivery from "~/modules/filter/components/sections/cardProduct/UI/Delivery.vue";
import ButtonStatus from "~/modules/filter/components/sections/cardProduct/UI/ButtonStatus.vue";

const props = defineProps({
  status: { type: Object, required: true },
  changeView: { type: Boolean, required: false },
  inactive: { type: Boolean, required: true },
});
</script>

<style lang="scss" scoped>
.availability {
  @include flex-container(row, center, center);

  gap: 28px;

  @include bigMobile {
    @include flex-container(row, space-between, center);

    gap: 0;
  }

  &__suggestions {
    @include flex-container(row, center, center);

    gap: 16px;

    @include bigMobile {
      gap: 8px;
    }
  }
}
</style>
    