<template>
  <div>
    <ToDo v-for="(task, index) in tasks" :key="index" :task=task 
    @checked=checkedTask(index) @deleteTask="deleteTask(index)"></ToDo>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    ToDo
  },
  data () {
    return {
      
    }
  },
  methods: {
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
