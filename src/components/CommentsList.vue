<template>
  <div>
    <ul class="comments__list">
      <base-comment
        v-for="comment in comments"
        :key="comment.commentId"
        :comment-id="comment.commentId"
        :name="comment.commentName"
        :comment="comment.comment"
        :item-id="itemId"
      ></base-comment>
    </ul>
    <h4 class="add-comment">Добавить Комментарий</h4>
    <form @submit.prevent="addComment">
      <input type="text" placeholder="Ваше Имя" v-model="name" />
      <textarea type="text" placeholder="Ваш Комментарий" v-model="comment" />
      <button>Подтвердить</button>
      <p v-if="error" class="error">Заполните все поля</p>
    </form>
  </div>
</template>

<script>
import BaseComment from "./base/BaseComment";
export default {
  props: ["comments", "itemId"],
  components: { BaseComment },
  data() {
    return {
      name: "",
      comment: "",
      error: false,
    };
  },
  methods: {
    addComment() {
      if (this.name && this.comment) {
        this.$store.dispatch("addComment", {
          itemId: this.itemId,
          commentId: Math.random(),
          commentName: this.name,
          comment: this.comment,
        });
        (this.name = ""), (this.comment = "");
        this.error = false;
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
input,
textarea {
  font-family: inherit;
  display: block;
  margin: 10px;
  max-width: 400px;
  width: 100%;
  font-size: 18px;
  outline: none;
  border: none;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  background-color: rgb(240, 241, 252);
  color: rgb(83, 83, 83);

  padding: 8px 30px 8px 10px;

  border-radius: 10px;
  box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
}

button {
  display: block;
  margin: 10px;
  outline: none;
  font-family: inherit;
  border: none;
  padding: 10px 20px;
  background-color: #e4e7fc;
  border-radius: 10px;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  box-shadow: 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px rgb(246, 246, 252) inset;
}
</style>
