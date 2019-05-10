<template>
    <div>
        <h1>{{this.all_msg.title}}</h1>
        <p>
           {{this.all_msg.content }}
        </p>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
           all_msg:''
        }
    },

    mounted:function(){
        //路由接收值
        this.all_msg = this.$route.query.content;
        //console.log(t)
       
    }
}
</script>


<style scoped>
h1{
    margin: 20px auto;
    text-align: center
}
</style>
