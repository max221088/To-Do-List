<template>
  <div class="wrop-task">
    <div class="checked">
      <img class="check-img" v-if="task.isDone" src="../assets/img/checked.svg">
      <img class="check-img" v-if="!task.isDone" src="../assets/img/Uncheck.svg">
    </div>
    <div class="task-content">
      {{ task.content }}
      <div class="data-task">
        created: {{ task.id }}
      </div>
      <div class="data-task" v-if="task.doneDate">
        finished: {{ task.doneDate }}
      </div>
    </div>
    <div class="button-block">
      <img class="btn" src="../assets/img/del_icon.svg">
      <img class="btn" src="../assets/img/edit_icon.svg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {
    task: Object
  },
  
}
</script>



