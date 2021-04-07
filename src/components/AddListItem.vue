<template>
  <div>
    <button @click="ShowForm">+</button>
    <div v-if="addItemFormVis">
      <form @submit.prevent="addItem">
        <input type="text" placeholder="Заголовок" v-model="title" />
        <input type="text" placeholder="Краткое Описание" v-model="shortDesc" />
        <textarea type="text" placeholder="Заметка" v-model="longDesc" />
        <button type="submit">Добавить</button>
      </form>
      <p v-if="emptyVal" class="error">Заполните все поля</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addItemFormVis: true,
      emptyVal: false,
      title: "",
      shortDesc: "",
      longDesc: "",
    };
  },

  methods: {
    ShowForm() {
      this.addItemFormVis = !this.addItemFormVis;
    },

    addItem() {
      if (this.title && this.shortDesc && this.longDesc) {
        const newPost = {
          itemId: Math.random(),
          title: this.title,
          shortDesc: this.shortDesc,
          longDesc: this.longDesc,
          comments: [],
        };
        this.$store.dispatch("addItem", newPost);

        this.emptyVal = false;
        (this.title = ""), (this.shortDesc = ""), (this.longDesc = "");
        this.addItemFormVis = false;
      } else {
        this.emptyVal = true;
      }
    },
  },
};
</script>

<style scoped>
.error {
  text-align: center;
  color: red;
}

input,
textarea {
  font-family: inherit;
  display: block;
  margin: 10px auto;
  width: 400px;
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
  margin: 10px auto;
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
