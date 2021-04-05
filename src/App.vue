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
