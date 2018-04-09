export default {
  state: {
    title: '欢迎',
    navMenu: [],
    todos: [
      {id: 3},
      {id: 15},
      {id: 20}
    ]
  },
  actions: {
    changeTitle ({commit}, title) {
      commit('CHANGETITLE', title)
    },
    getMenu: function ({commit}) {
      window.$http.get('/api/getMenu').then(res => {
        if (res.data.code) {
          commit('GETMENU', JSON.parse(res.data.personage.permission))
        } else {
          window.$route.push({path: '/'})
        }
      })
    }
  },
  mutations: {
    CHANGETITLE (state, title) {
      state.title = title
    },
    GETMENU (state, data) {
      state.navMenu = data
    }
  }
}
