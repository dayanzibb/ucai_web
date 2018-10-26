import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Good from './views/Good.vue'
import Index from './views/Index'
import Play from './views/Play'
import Mine from './views/Mine'
import Hot from './components/Hot'
import New from './components/New'
import Project from './components/Project'
import Sort from './components/Sort'
import Search from './components/Search'
import Details from './components/details/Details'
import Buy from './components/details/Buy'
import Login from './components/login/Login'
import Register from './components/login/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',name: 'home',redirect:'/index', component: Home,children:[
    	{path: '/index',name: 'index',component: Index},
    	{path: '/good',name: 'good',component: Good},
    	{path: '/play',name: 'play',component: Play},
      {path: '/mine',name: 'mine',component: Mine}
    ]},
    {path: '/hot',name: 'hot',component: Hot},
    {path: '/new',name: 'new',component: New},
    {path: '/project',name: 'project',component: Project},
    {path: '/sort',name: 'sort',component: Sort},
    {path: '/search',name: 'search',component: Search},
    {path: '/details',name: 'details',component: Details},
    {path: '/buy',name:'buy',component:Buy},
    {path: '/login',name: 'login',component: Login},
    {path: '/register',name: 'register',component: Register}
  ]
})
