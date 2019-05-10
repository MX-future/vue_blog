<template>
    <div>
        <div class="row">
            <div class="col-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">博客</h5>
                    <p class="card-text">新建一篇博客</p>
                    <router-link to="new-blog" class="btn btn-primary">去新建</router-link>
                </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">随手记</h5>
                    <p class="card-text">随手记录每一个灵感</p>
                    <router-link to="new-note" class="btn btn-primary">去记录</router-link>
                </div>
                </div>
            </div>
       </div>
       <router-view></router-view>
    </div>
</template>


<style scoped>
.card{
    margin: 20px auto;
     background: rgba(255,255,255,0.5);
}
</style>
