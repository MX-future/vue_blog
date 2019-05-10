// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueAwesomeSwiper);


// 在全局状态下，初始化数据库，这里我们初始化一次即可
// 在其他组件中，我们直接引入数据库，而不需要重复初始化，否则会报错
var APP_ID = 'Scu1Xfl9ewXjsQx9UEqoS5py-gzGzoHsz';
var APP_KEY = 'QPKbXKIcCKISRyuBYVKxFpYp';
var AV = require('leancloud-storage');
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
