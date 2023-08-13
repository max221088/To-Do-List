<template>
  <div class="wroper">
    <MenuPanel @openAddModal="openAddModal"/>
    <div class="task-wrop">
      <ToDo v-for="(task, index) in tasks" :key="index" :task=task 
      @checked=checkedTask(index) @deleteTask="deleteTask(index)"
      @showAllertEdited="showAllertEdited()"></ToDo>
    </div>
    <AddTask ref="addModal" @showAllertAdd="openAllertAdd()"></AddTask>
    <Allert ref="allertDel" :message="'Task Deleted'"></Allert>
    <Allert ref="allertAdd" :message="'Task Added'"></Allert>
    <Allert ref="allertEdited" :message="'Task Edited'"></Allert>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import MenuPanel from './components/MenuPanel.vue'
import AddTask from './components/AddTask.vue'
import Allert from './components/AllertMessage.vue'

export default {
  name: 'App',
  components: {
    ToDo,
    MenuPanel,
    AddTask,
    Allert
  },
  data () {
    return {
      
    }
  },
  methods: {
    showAllertEdited () {
      this.$refs.allertEdited.sendMessage()
    },
    openAllertAdd() {
      this.$refs.allertAdd.sendMessage()
    },
    openAddModal () {
      this.$refs.addModal.showModal()
    },
    checkedTask (index) {
      this.$store.commit('checkedTask', index)
    },
    deleteTask (index) {
      this.$store.commit('deleteTask', index)
      this.$refs.allertDel.sendMessage()
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
