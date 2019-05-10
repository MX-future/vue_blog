<template>
    <div>
        <div class="input-group input-group-lg">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-lg">标题</span>
            </div>
            <input v-model="blog_title" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">内容</span>
            </div>
            <textarea v-model="blog_content" style="min-height: 350px;"  class="form-control" aria-label="With textarea"></textarea>
        </div>  
        <div class="input-group-append">
            <router-link @click.native="submit_blog" to="/" class="btn btn-primary">提交</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            bog_title:'',
            blog_content:''
        }
    },
    methods:{
        submit_blog:function(){
            //引入LeanCloud
            var AV = require('leancloud-storage');
            var Blog = AV.Object.extend('Blog');
            var myBlog = new Blog();
            myBlog.save({
                title:this.blog_title,
                content:this.blog_content
            });
        }
    },
    //销毁组件，使得跳转到博客页面时会自动刷新当前页面数据
     deactivated() {
        this.$destroy()
    }
}
</script>


<style scoped>
.input-group{
    margin: 15px auto;
}
</style>
