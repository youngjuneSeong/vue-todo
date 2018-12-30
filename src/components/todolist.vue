<template>
  <div>
    <transition-group name="list" tag="div" class="ui middle aligned divided list">
      <div v-for="(todoItem, index) in propsdata" :key="todoItem" class="item">
        <div class="content">
          <a class="header">
            <i class="check icon"></i>
            <span class="txt">{{ todoItem }}</span>
            <i @click="removeTodo(todoItem, index)" class="trash alternate outline icon"></i>
            <i class="pencil alternate icon"></i>
          </a>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    props: ['propsdata'],
    methods: {
      removeTodo(todoItem, index) {
        // console.log(todoItem, index)
        this.$emit('linkevent', todoItem, index);
      }
    }
  }
</script>

<style lang="scss">
  .ui.list {
    margin-bottom: 30px !important;
  }

  .content {
    a {
      text-align: left;
      padding: 10px 10px;
      .check.icon {
        margin-right: 15px !important;
      }
      .trash.icon, .pencil.icon {
        float: right;
        color: gray;
        &:hover {
          color: black;
        }
      }
      .pencil.icon {
        margin-right: 10px !important;
      }
      .txt {
        display: inline-block;
        width: calc(100% - 90px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .list-move {
    transition: transform .5s;
  }
  .list-enter-active, .list-leave-active {
    transition: all .3s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
