<template>
  <div id="app">
    <div class="container">
      <my-header></my-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components:{
    'my-header':Header
  }
}

</script>

