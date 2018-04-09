import axios from 'axios'

axios.defaults.transformRequest['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

const jsonToUrl = (params) => {
  if (!params) {
    return ''
  }
  let arr = []
  for (let i in params) {
    arr.push(`${i}=${params[i]}`)
  }
  return arr.join('&')
}

export default {
  get: (url, data) => {
    axios.defaults.headers.token = window.localStorage.getItem('token') || ''
    return axios.get(url, data)
  },
  post: (url, data) => {
    axios.defaults.headers.token = window.localStorage.getItem('token') || ''
    if (url === '/api/upload') {
      axios.defaults.transformRequest['Content-Type'] = undefined
      return axios.post(url, data)
    }
    return axios.post(url, jsonToUrl(data))
  }
}
