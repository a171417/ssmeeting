<!-- 智能表单 -->
<template>
<form @submit.prevent="submit">
<section>
    <h2>{{title}}</h2>
    <!--主要内容slot -->
    <slot/>
    <div>
        <!--操作slot -->
        <slot name="actions" />
    </div>
</section>
<!-- <transition name="fade">
    <loading v-if="busy" class="overlay"/>
</transition> -->
</form>
</template>

<script>
export default {
props: {
    title:{
        type:String,
        required:true,
    },
    operation:{
        type:Function,
        required:true,
    },
    valid:{
        type:Boolean,
        required:true,
    }
},
data(){
    return{
        error:null,
        busy:false,
    }
},
methods:{
async submit(){
    if(this.valid && !this.busy){
        this.error=null
        this.busy=true
        try{
            await this.operation()
        }
        catch(e){
            this.error=e.error
        }
        this.busy=false
    }
}
}
}
</script>

<style scoped>
/* @import url(); 引入css类 */

</style>