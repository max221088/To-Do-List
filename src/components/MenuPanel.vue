<template>
  <div class="menu-wrop">
    <div @click="openModal" class="btn-add">
      <img class="add-icon" src="../assets/img/add_icon.svg">
      <p class="add-name">Add New Task</p>
    </div>
    <input @input="searchTask()" v-model="searchQuery" class="search-input" type="text" placeholder="Search Task">
    <div class="sort-panel">
      <select @change="sortTasks()" v-model="sortParam" class="sort-select">
        <option value="1">First new</option>
        <option value="2">First late</option>
      </select>
    </div>
    <div class="sort-panel">
      <select @change="filterTasks()" v-model="filterParam" class="sort-select">
        <option value="All">All</option>
        <option value="true">Done Only</option>
        <option value="false">Not Done Only</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuPanel',
  data () {
    return {
      taskForSearch: [],
      searchQuery: '',
      sortParam: '1',
      filterParam: 'All'
    }
  },
  methods: {
    openModal() {
      this.$emit('openAddModal')
    },
    searchTask() {
      let findTasks = []
      this.taskForSearch = JSON.parse(window.localStorage.getItem('tasks'))
      this.taskForSearch.forEach(el => {
        if (el.content.toLowerCase().indexOf(this.searchQuery.toLowerCase()) != -1) {
          findTasks.push(el)
        }
      })
      this.$store.commit('updateTasks', findTasks);
    },
    filterTasks() {
      let sortTask = []
      this.taskForSearch = JSON.parse(window.localStorage.getItem('tasks'))
      if (this.filterParam != 'All') {
      sortTask = this.taskForSearch.filter(function (el) {
        if (el.isDone.toString() === this.filterParam) {
          return true
        } else {
          return false
        }
      }.bind(this))
    } else {
      sortTask = this.taskForSearch
    }
    this.$store.commit('updateTasks', sortTask);
    },
    sortTasks () {
      this.taskForSearch = JSON.parse(window.localStorage.getItem('tasks'))
        this.taskForSearch.sort(function (a,b) {
          if (this.sortParam == 1) {
            if (Number(a.id) > Number(b.id)) {
              return 1;
            }
            if (Number(a.id) < Number(b.id)) {
              return -1;
            }
          }
          if (this.sortParam == 2) {
            if (Number(a.id) < Number(b.id)) {
              return 1;
            }
            if (Number(a.id) > Number(b.id)) {
              return -1;
            }
          }
        }.bind(this))
      this.$store.commit('updateTasks', this.taskForSearch);
    }
  },
}
</script>
