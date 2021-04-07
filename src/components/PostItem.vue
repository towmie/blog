<template>
  <div class="item">
    <div class="short">
      <div>
        <button
          class="arrow"
          :class="{ rotate: showFullItem }"
          v-if="!editMode"
        ></button>
        <h2 @click="revealFullItem" class="title" v-if="!editMode">
          {{ title }}
        </h2>
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
      <div class="buttons">
        <button
          class="update__btn"
          @click="updatePost"
          v-if="editMode"
        ></button>
        <button class="delete" @click="deletePost"></button>
        <button class="edit__btn" @click="editPostMode"></button>

        <div class="commets__img-box" :data-amount="comments.length">
          <img class="commets__img" src="./../assets/messenger.png" alt="" />
        </div>
      </div>
    </div>
    <div class="full" v-if="showFullItem">
      <p class="description" v-if="!editMode">{{ longDesc }}</p>
      <textarea
        type="text"
        v-else
        v-model="updatedLongDesc"
        @keypress.enter="updatePost"
      />

      <h4 class="comments">Комментарии:</h4>
      <comments-list
        v-if="showFullItem"
        :comments="comments"
        :item-id="itemId"
      ></comments-list>
    </div>
  </div>
</template>

<script>
import CommentsList from "./CommentsList";
export default {
  components: { CommentsList },
  props: ["itemId", "title", "shortDesc", "longDesc", "comments"],

  data() {
    return {
      showFullItem: false,
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

    deletePost() {
      this.$store.dispatch("deletePost", this.itemId);
    },
  },
};
</script>

<style scoped>
.rotate {
  transform: rotate(180deg);
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
.title {
  padding-left: 30px;
  position: relative;
  cursor: pointer;
}
.arrow {
  cursor: pointer;
  position: absolute;
  top: 25px;
  left: 45px;
  width: 15px;
  height: 15px;

  border: none;
  background-color: transparent;
  background-image: url(./../assets/arrow.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

input,
textarea {
  font-family: inherit;
  display: block;
  width: 350px;
  font-size: 16px;
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

.short {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons {
  display: flex;
  align-items: center;
}
.update__btn {
  margin-right: 10px;
  cursor: pointer;
  border: none;
  background-color: trasparent;
  padding: 3px 5px;
  width: 25px;
  height: 25px;
  background-image: url(./../assets/disk.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

input {
  display: block;
  margin-bottom: 10px;
}
.edit__btn {
  cursor: pointer;
  border: none;
  background-color: trasparent;
  padding: 3px 5px;
  margin-right: 10px;
  width: 25px;
  height: 25px;
  background-image: url(./../assets/edit.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.delete {
  cursor: pointer;
  border: none;
  background-color: trasparent;
  padding: 3px 5px;
  margin-right: 10px;
  width: 25px;
  height: 25px;
  background-image: url(./../assets/delete.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.commets__img-box {
  width: 40px;
  height: 40px;
}

.commets__img-box::after {
  content: attr(data-amount);
  position: absolute;
  width: 25px;
  height: 25px;
  top: 20px;
  right: 30px;
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
