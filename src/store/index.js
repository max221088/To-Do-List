import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    getTasks (state) {
      return state.tasks;
    },
  },
  mutations: {
    addNewTask (state, newTask) {
      this.state.tasks.push(newTask)
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    },
    updateTasks (state, updateTasks) {
      this.state.tasks = updateTasks
    },
    checkedTask (state, index) {
      this.state.tasks[index].isDone = !this.state.tasks[index].isDone;
      if (this.state.tasks[index].isDone) {
        this.state.tasks[index].doneDate = Date.now().toString()
      } else {
        this.state.tasks[index].doneDate = ''
      }
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    },
    updateTaskToLS () {
      window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
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
