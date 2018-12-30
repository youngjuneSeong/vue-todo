<template>
  <div class="input-box">
    <div class="ui input">
      <input v-model="newTodoItem" v-on:keyup.enter="addTodo" type="text" class="square" placeholder="Search...">
    </div>
    <button v-on:click="addTodo" class="ui button add square">
      +
    </button>
    <modal v-if="showModal" @close="showModal = false">

    </modal>
  </div>
</template>

<script>
  import modal from './common/modal.vue';
  export default {
    data(){
      return {
        newTodoItem: '',
        showModal: false,
      }
    },
    methods: {
      addTodo() {
        if (this.newTodoItem !== "") {
          var value = this.newTodoItem && this.newTodoItem.trim();
          // localStorage.setItem(value, value);
          this.$emit('linkevent', value);
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      clearInput() {
        this.newTodoItem = '';
      }
    },
    components: {
      'modal': modal
    }
  };
</script>

<style lang="scss">
  .square {
    border-radius: 0 !important;
  }
  .icon {
    margin: 0 !important;
  }
  .input-box {
    padding: 20px 0;
  }
  .ui.input {
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 65px);
    input {
      width: 100%;
    }
  }
  .ui.button.add {
    vertical-align: middle;
    padding: 0 1.5rem;
    height: 38px;
    background-color: #0B5195;
    color: white;
    font-size: 24px;
    font-weight: lighter;
    .plus.icon {
      color: white;
      opacity: 1;
    }
  }
</style>
