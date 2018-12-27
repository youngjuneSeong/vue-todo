<template>
  <div id="app">
    <todoheader></todoheader>
    <todoinput></todoinput>
    <todolist></todolist>
    <todofooter></todofooter>
  </div>
</template>

<script>
  import todoheader from './components/todoheader.vue'
  import todofooter from './components/todofooter.vue'
  import todoinput from './components/todoinput.vue'
  import todolist from './components/todolist.vue'

  export default {
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
  text-align: center;
  padding: 10px;
}
</style>
