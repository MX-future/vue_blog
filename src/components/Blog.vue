<template>
  <div class="blog">
    <my-swiper></my-swiper>

    <div class="row">
    <div class="col-lg-6" v-for="(message,index) in all_blog" :key="message.id">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{message.title}}</h5>
        <p class="card-text">{{message.content}}</p>
        <span>第{{index+1}}篇</span>
        <div @click="showmore(index)" to="blog-content" class="btn btn-primary">查看更多</div>
      </div>
    </div>
  </div>
</div>  
  </div>
  

</template>

<script>

import Swiper from './Swiper'
export default {
  data(){
    return{
      all_blog:[]
    }
  },
  components:{
     'my-swiper':Swiper
  },
  created:function(){
    var all_copy = this.all_blog
    //引入LeanCloud
    var AV = require('leancloud-storage');
    //从数据库中查询数据
    var query = new AV.Query('Blog');
    query.find().then(function(datas){
      for(var index in datas){
        all_copy.push(datas[index].attributes);
      }
    });

  },
  methods:{
    showmore(index){
    //路由传值
    this.$router.push({path:'/blog-content',query:{content:this.all_blog[index]}})
  }
  }
  
  }
</script>


<style scoped>
.card{
    margin: 20px auto;
    height: 250px;
    position: relative;
     background: rgba(255,255,255,0.5);
}
.btn{
    position: absolute;
    bottom: 20px;
    right: 20px;
}
span{
  position: absolute;
  bottom: 25px;
  font-size: 14px;
  color: gray;
}

</style>
