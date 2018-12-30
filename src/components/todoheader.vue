<template>
  <header>
    <h1 class="ui header">
      <div class="content">
        Todo List
        <div class="sub header">Take care of your schedule!</div>
      </div>
    </h1>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
header {
  .ui.header {
    padding-top: 20px;
    .content {
      color: #0B5195;
      font-size: 2.5rem;
      .sub.header {
        color: gray;
        font-size: 1rem;
      }
    }
  }
}
</style>
