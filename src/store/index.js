"use strict";
import { createStore } from "vuex";

export default createStore({
  state: {
    itemList: [],
    deleteComment: [],
  },
  mutations: {
    addItem(state, payload) {
      state.itemList.unshift(payload);
    },
    addComment(state, payload) {
      const newComment = {
        commentId: payload.commentId,
        commentName: payload.commentName,
        comment: payload.comment,
      };
      const propperItem = state.itemList.filter(
        (item) => item.itemId === payload.itemId
      );
      propperItem[0].comments.push(newComment);
    },

    deleteComment(state, payload) {
      console.log("wack", state, payload);
    },

    updatePost(state, payload) {
      state.itemList.map((item) => {
        if (item.itemId === payload.itemId) {
          item.title = payload.updatedTitle;
          item.shortDesc = payload.updatedShortDesc;
          item.longDesc = payload.updatedLongDesc;
          console.log(payload.updatedTitle, payload.updatedShortDesc);
        }
      });
    },
  },
  actions: {
    addItem(context, payload) {
      context.commit("addItem", payload);
    },

    addComment(context, payload) {
      context.commit("addComment", payload);
    },

    deleteComment(context, payload) {
      context.commit("deleteComment", payload);
    },

    updatePost(context, payload) {
      context.commit("updatePost", payload);
    },
  },
  getters: {
    fullItemsList(state) {
      return state.itemList;
    },
  },
});
