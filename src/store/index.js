"use strict";

import { createStore } from "vuex";

export default createStore({
  state: {
    itemList: [],
  },
  mutations: {
    addItem(state, payload) {
      // const postList = JSON.parse(localStorage.getItem("posts"));
      // console.log(postList);
      state.itemList.unshift(payload);
      // localStorage.clear();
      // localStorage.setItem("posts", JSON.stringify(state.itemList));
      // toLocalStr(state.itemList);
      // console.log(postList);
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
      // localStorage.clear();
      localStorage.setItem("posts", JSON.stringify(state.itemList));
    },

    deleteComment(state, payload) {
      state.itemList.map((item) => {
        if (item.itemId === payload.itemId) {
          item.comments = item.comments.filter(
            (comment) => comment.commentId !== payload.commentId
          );
        }
      });
      // localStorage.clear();
      // localStorage.setItem("posts", JSON.stringify(state.itemList));
    },

    deletePost(state, payload) {
      state.itemList = state.itemList.filter((post) => post.itemId !== payload);
      // localStorage.clear();
      // localStorage.setItem("posts", JSON.stringify(state.itemList));
    },

    updatePost(state, payload) {
      state.itemList.map((item) => {
        if (item.itemId === payload.itemId) {
          item.title = payload.updatedTitle;
          item.shortDesc = payload.updatedShortDesc;
          item.longDesc = payload.updatedLongDesc;
        }
      });
      // localStorage.clear();
      // localStorage.setItem("posts", JSON.stringify(state.itemList));
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
      //   const postList = localStorage.getItem("posts");
      //   const postListRaw = JSON.parse(postList);
      //   return postListRaw;
      //   // console.log(postList);
      return state.itemList;
    },
  },
});
