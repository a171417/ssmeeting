<!--  -->
<template>
<div>
  <h1>{{msg}}</h1>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
      <h3>赛事快报</h3>
    <MatchReportList></MatchReportList>
</div>
</template>

<script>

// import MatchReportList from '../components/MatchReportList'
export default {
data() {
return {
  msg:'测试页面123',
}
},
components:{
  // ButtonCounter,
  // MatchReportList
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>