import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home//异步路由的按需加载()=>import('@/pages/home/Home')
    },{
      path:"/city",
      name:'City',
      component: City//异步路由的按需加载()=>import('@/pages/city/City')
    },{
      path:'/detail/:id',
      name:"Detail",
      component:Detail//异步路由的按需加载()=>import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior ( to , from ,savePosition){
    return { x:0, y:0}
  }

})
