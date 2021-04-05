<template>
  <li class="comment">
    <div class="comment__data">
      <h4 class="comment__name">{{ name }}</h4>
      <p class="comment__text">{{ comment }}</p>
    </div>
    <button class="delete">X</button>
  </li>
</template>

<script>
export default {
  props: ["comment", "name"],
};
</script>
