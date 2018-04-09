import http from './axios'
import Vue from 'vue'

const tools = {
  install () {
    Object.defineProperty(Vue.prototype, '$http', {
      value: http
    })
    window.$http = http
  }
}

export default tools
