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
  .ui.basic.negative.button {
    margin: 0 0 20px 0;
    transition: all .3s;
    &:hover {
      background: #db2828 !important;
      color: white !important;
    }
  }
</style>
