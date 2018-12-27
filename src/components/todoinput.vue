<template>
  <div class="input-box">
    <div class="ui input">
      <input v-model="newTodoItem" v-on:keyup.enter="addTodo" type="text" class="square" placeholder="Search...">
    </div>
    <button v-on:click="addTodo" class="ui button square">
      <i class="plus icon"></i>
    </button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        newTodoItem: ''
      }
    },
    methods: {
      addTodo() {
        if (this.newTodoItem !== "") {
          var value = this.newTodoItem && this.newTodoItem.trim();
          localStorage.setItem(value, value);
          this.clearInput();
        }
      },
      clearInput() {
        this.newTodoItem = '';
      }
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
  .ui.button {
    vertical-align: middle;
    padding: .85777em 1.5em;
    background-color: darkslateblue;
    .plus.icon {
      color: white;
      opacity: 1;
    }
  }
</style>
