<template>
  <div id="app">
    <div class="top bar"></div>
    <todoheader></todoheader>
    <todoinput v-on:linkevent="addTodo"></todoinput>
    <todolist v-bind:propsdata="todoItems" v-on:linkevent="removeTodo"></todolist>
    <todofooter v-on:linkevent="removeTodoTotal"></todofooter>
  </div>
</template>

<script>
  import todoheader from './components/todoheader.vue'
  import todofooter from './components/todofooter.vue'
  import todoinput from './components/todoinput.vue'
  import todolist from './components/todolist.vue'

  export default {
    data() {
      return {
        todoItems: []
      }
    },
    created() {
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i))
        }
      }
    },
    methods: {
      addTodo(todoItem){
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
      },
      removeTodo(todoItem, index){
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1); // index 번째에서, 1개 삭제
      },
      removeTodoTotal(){
        localStorage.clear();
        this.todoItems.splice(localStorage.length);
        // this.todoItems = [];
      }
    },
    components: {
      'todoheader': todoheader,
      'todofooter': todofooter,
      'todoinput': todoinput,
      'todolist': todolist
    }
  }
</script>

<style lang="scss">
body {
  position: relative;
  #app {
    text-align: center;
    padding: 10px;
    max-width: 600px;
    margin: 0 auto;
    .bar {
      position: absolute;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: #0B5195;
      &.top {
        top: 0;
      }
      &.bot {
        bottom: 0;
      }
    }
  }
}
</style>
