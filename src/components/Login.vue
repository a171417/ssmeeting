<!--  -->
<template>
  <main class="login">
    <h1>进行操作前请登录</h1>
    <!-- <form>
      <FormInput name="username" v-model="username" placeholder="Username"/>
    </form> -->
    <SmartForm class="form" :title="title" :operation="operation" :valid="valid">
      <FormInput name="username" v-model="username" placeholder="Usename"/>
      <FormInput name="password" v-model="password" placeholder="Password"/>
      <template v-if="mode ==='signup'" >
        <FormInput name="verify-password" type="password" v-model="password2" placeholder="Retype password"/>
        <FormInput name="email" type="email" v-model="email" placeholder="Email"/>
      </template>
      <template slot="actions">
        <template v-if="mode === 'login'">
          <button type="button" class="secondary" @click="mode = 'signup'" >去注册</button>
          <button type="submit" :disabled="!valid">登录</button>
        </template>
      <template v-else-if="mode === 'signup'">
         <button type="button" class="secondary" @click="mode = 'login'" >如果已经有了账号，请去登录</button>
         <button type="submit" :disabled="!valid">注册账号</button>
      </template>
      </template>

    </SmartForm>
  </main>
</template>

<script>
export default {
  data() {
    return {
      mode:'login',
      username: '',
      password:'',
      password2:'',
      email:''
    };
  },
  computed:{
    title(){
      switch(this.mode){
        case 'login':return '登录页'
        case 'signup':return '欢迎创建账号'
      }
    },
    valid(){
      return !!this.username && !!this.password
    },
    retypePasswordValid(){
      return !!this.password2 && this.password ==this.password2
    },
    signValid(){
      return !!this.password2 && !!this.email && this.retypePasswordValid
    }
  },
  methods:{
    async operation(){
      await [this.mode]()
    },
    login(){
      console.log('请求登录操作。。。')
    },
    // async login(){
    //   //等待登录操作完成
    //   await console.log('请求登录操作。。。')
    // },
    async signup(){
      //等待注册操作完成
      await console.log('完成注册流程。。。')
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>