<template>
  <li class="comment">
    <div class="comment__data">
      <h4 class="comment__name"><span>Автор: </span>{{ name }}</h4>
      <p class="comment__text"><span>Комментарий: </span>{{ comment }}</p>
    </div>
    <button class="delete" @click="deleteComment">X</button>
  </li>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["comment", "name", "commentId", "itemId"],

  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", {
        commentId: this.commentId,
        itemId: this.itemId,
      });
    },
  },
};
</script>
<style scoped>
.comment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(211, 211, 211);
  margin-bottom: 15px;
}
.comment span {
  font-size: 12px;
  font-weight: 30;
}

.delete {
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: rgb(97, 97, 97);
}
</style>
