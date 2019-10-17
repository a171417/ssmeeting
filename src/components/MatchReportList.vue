<!--  -->
<template>
  <div>
    <MatchReportItem
      v-for="m in matchlist"
      :key="m.id"
      :title="m.title"
      :fontsize="postFontSize"
      ref="m.id"
      v-on:enlarge-text="onchildclicked"
    ></MatchReportItem>
  </div>
</template>

<script>
import MatchReportItem from "../components/MatchReportItem";
export default {
  data() {
    return {
      matchlist: [
        // { id: 1, title: "4x400米快报" },
        // { id: 2, title: "标枪比赛快报" },
        // { id: 3, title: "跳远比赛传捷报" }
      ],
      error:null,
      postFontSize: 2
    };
  },
  components: {
    MatchReportItem
  },
  methods: {
    onchildclicked: function() {
      console.log(this);
    }
  },
  created(){
    fetch('https://localhost:5001/api/MatchInfo')
    .then(function(response){
      console.log(response);
      return response.json();
    })
    .then(result => {this.matchlist=result})
    .catch(e=>{
      console.log(e);
      this.error=e;
      })
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>