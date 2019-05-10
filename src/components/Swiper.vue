<template>
<div class="swiper">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide><img class="swiper-img"  src="https://ws4.sinaimg.cn/large/0060lm7Tly1ftg6otk3cqj31hc0u014s.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="swiper-img" src="https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div> 
</template>
<script>
export default {
    name:'my-swiper',
    data(){
        return{
            swiperOption:'',
            imgsrc:[]
        }
    }
    
}
</script>
<style scoped>
.swiper{
    margin-top: 20px;
}
.swiper-img{
    width: 100%;
    height: 400px;
}
</style>
