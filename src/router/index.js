import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const route = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/components/Login'),
      meta: {
        name: '登陆'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/Home'),
      redirect: '/home/welcome',
      children: [
        {
          path: 'welcome',
          component: () => import('@/components/Deail/welcome'),
          meta: {
            name: '欢迎'
          }
        },
        {
          path: 'operations',
          component: () => import('@/components/Deail/operations'),
          meta: {
            name: '运营页'
          }
        },
        {
          path: 'order',
          component: () => import('@/components/Order/order'),
          meta: {
            name: '订单管理'
          }
        }
      ]
    }
  ]
})

route.beforeEach((to, from, next) => {
  document.title = to.meta.name
  const that = this
  setTimeout(function () {
    that.a.app.$store.dispatch('changeTitle', to.meta.name)
  }, 0)
  next()
})

export default route
