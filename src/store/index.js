import Vuex from 'vuex'
import Vue from 'vue'
import modules from './Modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules
})

export default store
