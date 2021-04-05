"use strict";
import { createStore } from "vuex";

export default createStore({
  state: {
    itemList: [],
  },
  mutations: {
    addItem(state, payload) {
      state.itemList.push(payload);
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
      console.log(state.itemList);
    },
  },
  actions: {
    addItem(context, payload) {
      context.commit("addItem", payload);
    },

    addComment(context, payload) {
      context.commit("addComment", payload);
    },
  },
  getters: {
    fullItemsList(state) {
      return state.itemList;
    },
  },
});
