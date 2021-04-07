"use strict";

import { createStore } from "vuex";

export default createStore({
  state: {
    itemList: [],
  },
  mutations: {
    addItem(state, payload) {
      console.log(state.itemList);
      state.itemList.unshift(payload);
      const parsed = JSON.stringify(state.itemList);
      localStorage.setItem("posts", parsed);
    },

    addComment(state, payload) {
      const newComment = {
        commentId: payload.commentId,
        commentName: payload.commentName,
        comment: payload.comment,
      };
      const propperItem = state.itemList.filter(
        (post) => post.itemId === payload.itemId
      );
      propperItem[0].comments.push(newComment);
      const parsed = JSON.stringify(state.itemList);
      localStorage.setItem("posts", parsed);
    },

    deleteComment(state, payload) {
      state.itemList.map((item) => {
        if (item.itemId === payload.itemId) {
          item.comments = item.comments.filter(
            (comment) => comment.commentId !== payload.commentId
          );
        }
      });
      const parsed = JSON.stringify(state.itemList);
      localStorage.setItem("posts", parsed);
    },

    deletePost(state, payload) {
      state.itemList = state.itemList.filter((post) => post.itemId !== payload);
      const parsed = JSON.stringify(state.itemList);
      localStorage.setItem("posts", parsed);
    },

    updatePost(state, payload) {
      state.itemList.map((item) => {
        if (item.itemId === payload.itemId) {
          item.title = payload.updatedTitle;
          item.shortDesc = payload.updatedShortDesc;
          item.longDesc = payload.updatedLongDesc;
        }
      });
      const parsed = JSON.stringify(state.itemList);
      localStorage.setItem("posts", parsed);
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
    deletePost(context, payload) {
      context.commit("deletePost", payload);
    },
  },
  getters: {
    fullItemsList(state) {
      if (localStorage.getItem("posts")) {
        state.itemList = JSON.parse(localStorage.getItem("posts"));
      }
      return state.itemList;
    },
  },
});
