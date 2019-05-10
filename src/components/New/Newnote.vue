<template>
    <div>
        <div class="input-group mb-3">
            <input type="text" v-model="note_content" class="form-control" placeholder="在此输入内容..." aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
                <router-link tag="button" to="my-note" @click.native="submit_note" class="btn btn-primary">提交</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
          note_content: ''  
        }
    },
    methods:{
        submit_note: function(){
            //引入LeanCloud
            var AV = require('leancloud-storage');
            var Note = AV.Object.extend('Note');
            var myNote = new Note();
            myNote.save({
                note_content:this.note_content
            });
           
    },
    //销毁组件，使得跳转到随手记页面时会自动刷新当前页面数据
    deactivated() {
        this.$destroy()
    }
    } 
}


</script>

<style scoped>
.card{
    margin: 20px auto;
}
input{
    height: 50px;
}
</style>
