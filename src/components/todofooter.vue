<template>
  <div>
    <button @click="removeTodoAll" class="ui negative basic button">All Clear <i class="trash alternate outline icon"></i></button>
  </div>
</template>

<script>
  export default {
    methods: {
      removeTodoAll() {
        this.$emit('linkevent');
      }
    }
  }
</script>

<style lang="scss">
  .ui.negative.button {
    margin: 0 0 20px 0;
  }
</style>
