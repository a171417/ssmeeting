<template>
  <div id="app">
    <nav>
      <!-- <a href="/">主页</a>
      <a href="/test">测试</a> -->
      <router-link :to="'/'">主页</router-link>
      <router-link :to="'test'">测试页</router-link>
      <router-link :to="'result'">赛事快报</router-link>
    </nav>
    <img src="./assets/logo.png">
    <p>{{msg}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{msg:''};
    
  },
  created()
  {
    
    fetch('https://localhost:5001/api/MatchInfo').then(
      response=>{
        if(response.ok){return response.json()}
        else{
          return Promise.reject('error')
        }
      }).then(result => {this.msg=result
      }).catch(e=>{console.error(e)})
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
