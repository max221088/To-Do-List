<template>
  <div class="wroper">
    <MenuPanel @openAddModal="openAddModal"/>
    <div class="task-wrop">
      <ToDo v-for="(task, index) in tasks" :key="index" :task=task 
      @checked=checkedTask(index) @deleteTask="deleteTask(index)"></ToDo>
    </div>
    <AddTask ref="addModal"></AddTask>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import MenuPanel from './components/MenuPanel.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    ToDo,
    MenuPanel,
    AddTask
  },
  data () {
    return {
      
    }
  },
  methods: {
    openAddModal () {
      this.$refs.addModal.showModal()
    },
    checkedTask (index) {
      this.$store.commit('checkedTask', index)
    },
    deleteTask (index) {
      this.$store.commit('deleteTask', index)
    }
  },
  computed: {
    tasks () {
      return this.$store.getters['getTasks'];
    }
  },
  created () {
    if (localStorage.getItem("tasks")!= null) {
      this.$store.dispatch('fetchTasksFromLS');
    }
  }
}

</script>

<style lang="less">
@import './assets/less/index.less';
</style>
