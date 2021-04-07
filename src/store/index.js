"use strict";

import { createStore } from "vuex";

function saveToLS(list) {
  const parsed = JSON.stringify(list);
  localStorage.setItem("posts", parsed);
}

export default createStore({
  state: {
    itemList: [],
  },
  mutations: {
    addItem(state, payload) {
      state.itemList.unshift(payload);

      saveToLS(state.itemList);
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

      saveToLS(state.itemList);
    },

    deleteComment(state, payload) {
      state.itemList.map((item) => {
        if (item.itemId === payload.itemId) {
          item.comments = item.comments.filter(
            (comment) => comment.commentId !== payload.commentId
          );
        }
      });
      saveToLS(state.itemList);
    },

    deletePost(state, payload) {
      state.itemList = state.itemList.filter((post) => post.itemId !== payload);
      saveToLS(state.itemList);
    },

    updatePost(state, payload) {
      state.itemList.map((item) => {
        if (item.itemId === payload.itemId) {
          item.title = payload.updatedTitle;
          item.shortDesc = payload.updatedShortDesc;
          item.longDesc = payload.updatedLongDesc;
        }
      });
      saveToLS(state.itemList);
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
