<template>
  <div class="add-wrop" v-bind:class="{active: isOpen}">
    <div class="overlay">
      <div class="modal-container">
        <div class="content-block">
          <p class="add-name">Enter content for new task</p>
          <textarea autofocus rows="4"
          cols="40" class="add-content" v-model="content"></textarea>
        </div>
        <div class="btn-block">
          <button @click="addTask()" class="btn-ok">OK</button>
          <button @click="cancel()" class="btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'AddTask',
  data () {
    return {
      content: '',
      isOpen: false
    }
  },
  methods: {
    addTask () {
      let newTask = {
        id: Date.now().toString(),
        content: this.content,
        isDone: false,
        doneDate: ''
      }
      this.$store.commit('addNewTask', newTask)
      this.$emit('showAllertAdd')
      this.isOpen = false
      this.content = ''
    },
    cancel () {
      this.content = ''
      this.isOpen = false
    },
    showModal () {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
