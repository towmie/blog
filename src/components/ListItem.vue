<template>
  <div>
    <base-item
      v-for="item in itemsList"
      :key="item.itemId"
      :item-id="item.itemId"
      :title="item.title"
      :short-desc="item.shortDesc"
      :long-desc="item.longDesc"
      :comments="item.comments"
    ></base-item>
  </div>
</template>

<script>
import BaseItem from "./base/BaseItem";
export default {
  components: { BaseItem },
  computed: {
    itemsList() {
      return this.$store.getters.fullItemsList;
    },
  },
};
</script>
