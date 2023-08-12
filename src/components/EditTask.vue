<template>
  <div class="edit-wrop">
    <input autofocus class="edit-input" type="text" v-model="editTask.content">
  </div>
</template>

<script>
export default {
  name: 'EditTask',
  props: {
    taskId: Object
  },
  data () {
    return {
      editTask: {}
    }
  },
  created () {
    this.editTask = this.taskId;
  }
}
</script>