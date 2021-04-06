<template>
  <div>
    <post-item
      v-for="item in itemsList"
      :key="item.itemId"
      :item-id="item.itemId"
      :title="item.title"
      :short-desc="item.shortDesc"
      :long-desc="item.longDesc"
      :comments="item.comments"
    ></post-item>
  </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
  components: { PostItem },
  computed: {
    itemsList() {
      // const postList = localStorage.getItem("posts");
      // const postListRaw = JSON.parse(postList);
      // return postListRaw;
      return this.$store.getters.fullItemsList;
    },
  },
};
</script>
