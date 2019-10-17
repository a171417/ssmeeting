<!--  -->
<template>
  <button v-on:click="count++">你点击了 {{ count }} 次.</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>