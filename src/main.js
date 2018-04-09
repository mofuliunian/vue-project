// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import tools from 'tools/tools'

Vue.use(VueParticles)
Vue.use(ElementUI)
Vue.use(tools)

Vue.config.productionTip = false
window.$route = router

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
