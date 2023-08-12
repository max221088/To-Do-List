<template>
  <div>

    <ToDo v-for="(task, index) in tasks" :key="index" :task=task></ToDo>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    ToDo
  },
  computed: {
    tasks () {
      return this.$store.getters['getTasks'];
    }
  }
}

</script>

<style lang="less">
@import './assets/less/index.less';
</style>
