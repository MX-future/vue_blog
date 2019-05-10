<template>
    <div>
      <div class="card" v-for="note in all_note" :key="note.index">
        <div class="card-body">
            {{note.note_content}}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      all_note: []
    }
  },
  created(){
    var note_copy = this.all_note;
    //引入LeanCloud
    var AV = require('leancloud-storage');
    //从数据库中查询数据
    var query = new AV.Query('Note');
    query.find().then(function(datas){
      for(var index in datas){
        note_copy.unshift(datas[index].attributes);
      }
    });
  }

}


</script>

<style scoped>
.card{
    margin: 20px auto;
    background: rgba(255,255,255,0.5);
}
</style>
