<template>
  <div class="item">
    <!-- @click="revealFullItem" -->
    <div>
      <h3 class="title">{{ title }}</h3>
      <h4 class="short-desc" v-if="!showFullItem">{{ shortDesc }}</h4>
    </div>
    <div class="commets__img" data-amount="10">
      <img class="" src="" alt="" />
    </div>

    <div class="opened" v-if="showFullItem">
      <p class="description">{{ longDesc }}</p>
      <h4 class="comments">Comments</h4>
      <comments-list :comments="comments" :item-id="itemId"></comments-list>
    </div>
  </div>
</template>

<script>
import CommentsList from "../CommentsList.vue";
export default {
  components: { CommentsList },
  props: ["itemId", "title", "shortDesc", "longDesc", "comments"],
  data() {
    return {
      showFullItem: true,
    };
  },
  computed: {},
  methods: {
    revealFullItem() {
      this.showFullItem = !this.showFullItem;
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  margin-bottom: 10px;
}
</style>
