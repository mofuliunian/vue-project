export default {
  state: {
    order: [],
    orderLen: 0,
    page: {
      page: 1,
      pageSum: 5,
      filter: 0
    },
    loading: false
  },
  actions: {
    getOrder ({commit}) {
      commit('GETLOADING')
      window.$http.get('/api/getOrder?page=' + this.state.order.page.page + '&pageSum=' + this.state.order.page.pageSum + '&filter=' + this.state.order.page.filter).then(res => {
        if (res.data.code) {
          commit('GETORDER', res.data.data)
          commit('GETORDERLEN', res.data.len)
          commit('GETLOADING')
        } else {
          window.$route.push({path: '/'})
        }
      })
    },
    pageChange ({commit}, data) {
      commit('GETPAGE', {page: data})
      this.dispatch('getOrder')
    },
    pageSumChange ({commit}, data) {
      commit('GETPAGE', {pageSum: data})
      this.dispatch('getOrder')
    },
    filter ({commit}, data) {
      commit('GETPAGE', {filter: data})
      this.dispatch('getOrder')
    }
  },
  mutations: {
    GETORDER (state, data) {
      state.order = data
    },
    GETORDERLEN (state, data) {
      state.orderLen = data
    },
    GETPAGE (state, data) {
      Object.assign(state.page, data)
    },
    GETLOADING (state) {
      state.loading = !state.loading
    }
  },
  getters: {
    orderGet: state => {
      return state.order.map(order => {
        switch (order.orderState) {
          case 1:
            order.orderState = '未支付'
            break
          case 2:
            order.orderState = '支付失败'
            break
          case 3:
            order.orderState = '审核中'
            break
          case 4:
            order.orderState = '审核失败'
            break
          case 5:
            order.orderState = '待发货'
            break
          case 6:
            order.orderState = '已发货'
            break
          case 7:
            order.orderState = '交易成功'
            break
          case 8:
            order.orderState = '已取消'
            break
          case 9:
            order.orderState = '拒收退货中'
            break
          case 10:
            order.orderState = '退款中'
            break
          case 11:
            order.orderState = '已退款'
            break
        }
        switch (order.methodPayment) {
          case 1:
            order.methodPayment = '信用支付'
            break
          case 2:
            order.methodPayment = '联联支付'
            break
          case 3:
            order.methodPayment = '微信支付'
            break
          case 4:
            order.methodPayment = '京东支付'
            break
        }
        switch (order.returnsState) {
          case 0:
            order.returnsState = '-'
            break
          case 1:
            order.returnsState = '未收货'
            break
          case 2:
            order.returnsState = '已收货'
            break
        }
        return order
      })
    }
  }
}
