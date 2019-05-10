import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import Blog from '../components/Blog'
import Note from '../components/Note'
import Contact from '../components/Contact'
import Newcontext from '../components/New/Newcontext'
import Blogcontent from '../components/Blogcontent'

//二级路由
import Newblog from '../components/New/Newblog'
import Newnote from '../components/New/Newnote'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/',name: 'myblog',component: Blog } ,
    { path: '/my-note',name: 'mynote',component: Note },
    { path: '/my-contact',name: 'mycontact',component: Contact },

    { path: '/my-newcontext',name: 'mynewcontext',component: Newcontext,
      //子路由/二级路由
      children:[      
        { path:'/new-blog',name: 'newblog',component: Newblog },
        { path:'/new-note',name: 'newnote',component: Newnote}
      ]
    },
    { path: '/blog-content',name: 'blogcontent',component: Blogcontent }
  ]
})
