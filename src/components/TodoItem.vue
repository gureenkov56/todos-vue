<template>
  <li>
    <input type="checkbox" v-on:change="oneTask.completed = !oneTask.completed">
    <span v-bind:class="{done: oneTask.completed}">
      <strong>{{index + 1}}</strong>
      {{oneTask.title}}
    </span>
    <button v-on:click="$emit('removeItem', oneTask.id)">x</button>
  </li>
</template>

<script>
export default {
  props:{
    oneTask:{
      type: Object,
      required: true,
    },
    index: Number,
  }
}
</script>

<style scoped>
  li{
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  span{
    text-align: left;
    flex: 2;
    padding-left: 10px;
  }
  .done{
    text-decoration: line-through;
  }
</style>