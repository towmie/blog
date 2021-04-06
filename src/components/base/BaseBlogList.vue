<template>
  <div class="base-list">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.base-list {
  min-height: 90vh;
  padding: 20px;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #e4e7fc;
  border-radius: 2rem;
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
  box-shadow: 8px 4px 12px 0px #d1d9e6, 4px 4px 4px 0px rgb(246, 246, 252) inset;
}
</style>
