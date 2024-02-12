<template>
  <div class="flex pb-1">
    <p class="pr-4 font-medium">
      <slot name="detail-info"></slot>
    </p>
    <p class="">
      <slot name="detail-info-value"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "BookDetailsComponent",
};
</script>
