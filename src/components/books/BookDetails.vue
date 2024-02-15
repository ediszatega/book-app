<template>
  <div class="flex pb-1">
    <p class="pr-4 font-medium">{{ detailInfo }}</p>
    <p>{{ detailInfoValue }}</p>
  </div>
</template>

<script>
export default {
  name: "BookDetailsComponent",
  props: {
    detailInfo: {
      type: String,
      required: true,
    },
    detailInfoValue: {
      type: String,
      required: true,
    },
  },
};
</script>
