<template>
  <div>
    <base-item
      @updatePost="updatePost"
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
  methods: {
    updatePost(post) {
      console.log(post);
      this.$store.dispatch("updatePost", post);
    },
  },
};
</script>
