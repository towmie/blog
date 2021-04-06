<template>
  <div>
    <base-blog-list>
      <add-list-item></add-list-item>
      <list-item></list-item>
    </base-blog-list>
  </div>
</template>

<script>
import BaseBlogList from "./components/base/BaseBlogList.vue";
import ListItem from "./components/ListItem.vue";
import AddListItem from "./components/AddListItem.vue";

export default {
  components: { BaseBlogList, ListItem, AddListItem },
};
</script>

<style>
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

ul {
  padding: 0;
  list-style: none;
}
</style>
