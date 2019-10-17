<!--  -->
<template>
  <div :style="{ fontSize : 2+'em' }" >
    <button v-on:click="$emit('enlarge-text')">放大字体</button>
    <p>{{ title }}</p>
    <p>{{fontsize}}</p>
  </div>
</template>

<script>
export default {
  props: { title: String, increase: Number, fontsize: Number }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>