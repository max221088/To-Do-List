<template>
  <div class="confirm-wrop" v-bind:class="{active: isOpen}">
    <div class="overlay">
      <div class="modal-container">
        <div class="content-block">
          <p class="add-name">Do you want to delete task?</p>
          <div class="btn-block">
            <button @click="confirm()" class="btn-ok">Delete</button>
            <button @click="cancel()" class="btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
      this.isOpen = false
    },
    cancel () {
      this.isOpen = false
    },
    showModal () {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
