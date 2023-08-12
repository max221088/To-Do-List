import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: '1111',
        content: 'Some Task To do 1',
        isDone: false,
        doneDate: ''
      },
      {
        id: '222',
        content: 'Some Task To do 2',
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
    checkedTask (state, index) {
      this.state.tasks[index].isDone = !this.state.tasks[index].isDone;
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    },
    updateTask (state, updatedTasks) {
      this.state.tasks = updatedTasks;
    },
    deleteTask (state, index) {
      this.state.tasks.splice(index, 1)
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  },
  actions: {
    fetchTasksFromLS () {
      this.state.tasks = JSON.parse(window.localStorage.getItem('tasks'))
    }
  },
  modules: {
  }
})
