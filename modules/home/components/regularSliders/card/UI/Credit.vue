<template>
  <div 
    class="credit" 
    :class="{ 'not-available': inactive || !inactiveCard} ">
    <svg
      class="credit__image"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.24957 10.5C10.6496 7.8 15.9996 6.875 18.3746 6.75C21.7495 6.75 23.6246 9.375 24.3746 12C25.1246 14.625 19.8746 21.375 11.6246 21.75C3.37457 22.125 5.24957 13.875 8.24957 10.5Z"
        fill="#E2A977"
        fill-opacity="0.15"
      />
      <path
        class="credit__image"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 4.50374V13.5001H25.4964C25.1325 8.70011 21.3 4.86758 16.5 4.50374ZM26.2484 13.5C26.2775 13.9132 25.9389 14.2501 25.5247 14.2501H16.5C16.0858 14.2501 15.75 13.9143 15.75 13.5001V4.47543C15.75 4.06121 16.0869 3.72265 16.5001 3.75175C21.7149 4.11896 25.8812 8.28522 26.2484 13.5Z"
        fill="#F36C21"
      />
      <path
        class="credit__image"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2623 5.97628C14.2623 5.97629 14.2623 5.97627 14.2623 5.97628L14.2623 15.7377H24.0238C24.438 15.7377 24.7774 16.0746 24.7483 16.4878C24.3637 21.9436 19.8159 26.2501 14.2623 26.2501C8.45653 26.2501 3.75 21.5435 3.75 15.7377C3.75 10.1841 8.0565 5.63638 13.5122 5.25175C13.9254 5.22262 14.2623 5.56208 14.2623 5.97628ZM23.9953 16.4886H14.2614C13.8472 16.4886 13.5114 16.1528 13.5114 15.7386V6.00473C8.4712 6.38815 4.50088 10.5993 4.50088 15.7377C4.50088 21.1288 8.87123 25.4992 14.2623 25.4992C19.4008 25.4992 23.6119 21.5288 23.9953 16.4886Z"
        fill="#F36C21"
      />
    </svg>
   <!--  <SvgIconLocal name="credit" width="28px" height="28px" />   --> 
  </div>   
</template>

<script setup>
import SvgIconLocal from '~~/modules/shared/SvgIconLocal.vue'
defineProps({
    inactive: { type: Boolean, required: true},
    inactiveCard: { type: Boolean, required: true},
});
</script>

<style lang="scss" scoped>
.credit {
  font-size: 0;

  &.not-available &__image {
    fill: #8a8a8a;
  }

  &__image {
    @include bigMobile {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
          