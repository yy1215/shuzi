import Vue from 'vue'
import VueRouter  from 'vue-router'
import login from '@/components/login'
import notFound from '@/components/404.vue'
import home from '@/components/home'
import userManagement from '@/components/systemManagement/userManagement'
import roleManagement from '@/components/systemManagement/roleManagement'
import addUser from '@/components/systemManagement/addUser'
import infoList from '@/components/contentInfo/infoList'

Vue.use(VueRouter)
  let routes =  [
    {
      path: '/login',
      name: '系统登录',
      component: login,
      hidden: true
    },
    {
      path: '/404',
      component: notFound,
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: home,
      name: '系统管理',
      iconCls: 'fa fa-bar-chart',
      children:[
        {
          path: '/userManagement',
          name: '用户管理',
          component: userManagement
        },
        {
          path: '/roleManagement',
          name: '角色管理',
          component: roleManagement
        },
        {
          path: '/addUser',
          name: '新增用户',
          component: addUser,
           
        }
      ]
    },
    {
      path: '/',
      component: home,
      name: '内容管理',
      iconCls: 'fa fa-bar-chart',
      //leaf: true,//只有一个节点
      children:[
        {
         path: '/infoList',
         name: '公告信息',
         component: infoList
        }
      ]
    }
  ]

var router = new VueRouter({
    routes
})
export default router;