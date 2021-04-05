<template>
  <div>
    <button @click="ShowForm">+</button>
    <div v-if="addItemFormVis">
      <form @submit.prevent="addItem">
        <input type="text" placeholder="Title" v-model="title" />
        <input
          type="text"
          placeholder="Short Description"
          v-model="shortDesc"
        />
        <input type="text" placeholder=" Description" v-model="longDesc" />
        <button type="submit">Submit</button>
      </form>
      <p v-if="emptyVal">Заполните все поля</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addItemFormVis: false,
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
        this.$store.dispatch("addItem", {
          itemId: Math.random(),
          title: this.title,
          shortDesc: this.shortDesc,
          longDesc: this.longDesc,
          comments: [],
        });

        this.emptyVal = false;
        (this.title = ""), (this.shortDesc = ""), (this.longDesc = "");
      } else {
        this.emptyVal = true;
      }
    },
  },
};
</script>

<style scoped>
button {
  display: block;
  margin: 0 auto;
}

input {
  display: block;
  margin: 10px auto;
}
</style>
