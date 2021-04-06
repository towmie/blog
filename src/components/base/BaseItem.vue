<template>
  <div>
    <div class="item">
      <div>
        <!-- @click="revealFullItem" -->
        <h2 class="title" v-if="!editMode">{{ title }}</h2>
        <input
          type="text"
          v-else
          @keypress.enter="updatePost"
          v-model="updatedTitle"
        />
        <h4 class="short-desc" v-if="!editMode">
          {{ shortDesc }}
        </h4>
        <input
          type="text"
          v-else
          v-model="updatedShortDesc"
          @keypress.enter="updatePost"
        />
      </div>
      <button @click="updatePost" v-if="editMode">Update</button>
      <button class="edit__btn" @click="editPostMode"></button>

      <div class="commets__img-box" :data-amount="comments.length">
        <img class="commets__img" src="./../../assets/messenger.png" alt="" />
      </div>

      <div class="opened">
        <p class="description" v-if="!editMode">{{ longDesc }}</p>
        <input
          type="text"
          v-else
          v-model="updatedLongDesc"
          @keypress.enter="updatePost"
        />

        <h4 class="comments">Comments:</h4>
      </div>
      <comments-list
        v-if="showFullItem"
        :comments="comments"
        :item-id="itemId"
      ></comments-list>
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
      editMode: false,
      updatedTitle: this.title,
      updatedShortDesc: this.shortDesc,
      updatedLongDesc: this.longDesc,
    };
  },

  methods: {
    revealFullItem() {
      this.showFullItem = !this.showFullItem;
    },

    editPostMode() {
      this.editMode = !this.editMode;
      this.showFullItem = true;
    },

    updatePost() {
      this.$store.dispatch("updatePost", {
        itemId: this.itemId,
        updatedTitle: this.updatedTitle,
        updatedShortDesc: this.updatedShortDesc,
        updatedLongDesc: this.updatedLongDesc,
      });
      this.editMode = false;
    },
  },
};
</script>

<style scoped>
.title {
  padding-left: 30px;
}
.item {
  position: relative;
  padding: 20px 40px;
  margin-bottom: 10px;
  background-color: #e4e7fc;
  border-radius: 2rem;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  box-shadow: 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px rgb(246, 246, 252) inset;
}
input {
  display: block;
  margin-bottom: 10px;
}
.edit__btn {
  cursor: pointer;
  position: absolute;
  right: 100px;
  top: 30px;
  border: none;
  background-color: trasparent;
  padding: 3px 5px;
  width: 25px;
  height: 25px;
  background-image: url(./../../assets/edit.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.commets__img-box {
  position: absolute;
  top: 20px;
  right: 40px;
  width: 40px;
  height: 40px;
}

.commets__img-box::after {
  content: attr(data-amount);
  position: absolute;
  width: 25px;
  height: 25px;
  top: -8px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #d1d9e6;
  font-size: 12px;
  border-radius: 50%;
  background-color: rgb(3, 0, 173);
}
.commets__img {
  width: 100%;
}

.comments {
  border-top: 1px solid rgb(211, 211, 211);
  font-weight: normal;
  padding-top: 30px;
  padding-left: 30px;
  text-transform: uppercase;
}
</style>
