<template>
  <div class="wrop-task" v-bind:class="{'edit': isEdit}">
    <div class="checked" v-bind:class="{'done': task.isDone}">
      <img class="check-img" v-if="task.isDone" src="../assets/img/checked.svg"
      @click="checkedTask(task)">
      <img class="check-img" v-if="!task.isDone" src="../assets/img/Uncheck.svg"
      @click="checkedTask(task)">
    </div>
    <div class="task-content">
      <p @dblclick="editTask" v-if="!isEdit">{{ task.content }}</p>
      <EditTask v-if="isEdit" :taskId="task"></EditTask>
      <div class="data-task">
        created: {{ new Date(Number(task.id)).toLocaleString() }}
      </div>
      <div class="data-task" v-if="task.doneDate">
        finished: {{ new Date(Number(task.doneDate)).toLocaleString()}}
      </div>
      <div class="data-task" v-if="!task.doneDate">
        In Progress
      </div>
    </div>
    <div class="button-block">
      <img @click="deleteTask" class="btn" src="../assets/img/del_icon.svg">
      <img v-if="!isEdit" @click="editTask" class="btn" src="../assets/img/edit_icon.svg">
      <img v-if="isEdit" @click="saveChange" class="btn" src="../assets/img/save_icon.svg" >
      <img v-if="isEdit" @click="cancelEdit" class="btn" src="../assets/img/cancel_icon.svg" >
    </div>
  </div>
</template>

<script>
import EditTask from './EditTask.vue'

export default {
  name: 'ToDo',
  components: {
    EditTask
  },
  props: {
    task: Object
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    editTask() {
      this.isEdit = !this.isEdit
    },
    saveChange () {
      this.$store.commit('updateTaskToLS')
      this.isEdit = !this.isEdit
    },
    cancelEdit () {
      this.$store.dispatch('fetchTasksFromLS')
      this.isEdit = !this.isEdit
    },
    checkedTask () {
      this.$emit('checked')
    },
    deleteTask () {
      this.$emit('deleteTask')
    }
  },
  computed: {
    tasks () {
      return this.$store.getters['getTasks'];
    }
  },
}
</script>



