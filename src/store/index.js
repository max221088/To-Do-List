import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: '11111',
        content: 'Some Task To do',
        isDone: false,
        doneDate: ''

      },
      {
        id: '11111',
        content: 'Some Task To do',
        isDone: false,
        doneDate: ''

      }
    ]
  },
  getters: {
    getTasks (state) {
      return state.tasks;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
