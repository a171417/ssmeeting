<!-- 表单输入组件 -->
<template>
  <div class="row">
    <input
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      @input="update"
    />
  </div>
</template>

<script>
export default {
  model:{
    prop:'text',
    event:'update',
  },
  props: {
    name: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    text: {
      required: true
    },
    placeholder: {
      type: String
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputClass() {
      return {
        'invalid': this.invalid
      };
    },
    elment(){
      return this.type === textarea ? this.type:'input'
    }
  },
  methods:{
    update(event){
      // console.log(event.currentTarget.value)
      this.$emit('update',event.currentTarget.value)
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>