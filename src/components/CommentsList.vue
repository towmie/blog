<template>
  <div>
    <!-- <ul class="comments__list">
      <base-comment
        v-for="comment in comments"
        :key="comment.commentId"
        :comment-id="comment.commentId"
        :name="comment.commentName"
        :comment="comment.comment"
      ></base-comment>
    </ul> -->
    <h4 class="add-comment">Add comment</h4>
    <form @submit.prevent="addComment">
      <input type="text" placeholder="Your name" v-model="name" />
      <input type="text" placeholder="Your comment" v-model="comment" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
// import BaseComment from "./base/BaseComment";
export default {
  props: ["comments", "itemId"],
  //   components: { BaseComment },
  data() {
    return {
      name: "",
      comment: "",
    };
  },
  methods: {
    addComment() {
      this.$store.dispatch("addComment", {
        itemId: this.itemId,
        commentId: Math.random(),
        commentName: this.name,
        comment: this.comment,
      });
      (this.name = ""), (this.comment = "");
    },
  },
};
</script>
