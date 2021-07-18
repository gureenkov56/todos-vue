<template>
  <div>
    <ul>
      <TodoItem 
        v-for="(oneTask, i) of arrTasks" 
        v-bind:oneTask="oneTask" 
        v-bind:index="i" 
        :key="oneTask.id"
        v-on:removeItem = "removeItem"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue"
export default {
  props: ['arrTasks'],
  components: {
    TodoItem,
  },
  methods: {
    removeItem(id){
      this.$emit('removeItem', id)
    }
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>