<template>
  <div id="app">
    <h1>Todo</h1>
    <AddItem 
      v-on:addNewItem = "addNewItem"
    />
    <TodoList 
      v-bind:arrTasks="arrTasks"
      v-on:removeItem = "removeItem"
    />
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import AddItem from "./components/AddItem";
export default {
  name: 'App',
  components: {
    TodoList,
    AddItem
  },
  data(){
    return {
      arrTasks: [
        {id: 1, title: "Buy milk", completed: false},
        {id: 2, title: "Buy bread", completed: false},
        {id: 3, title: "Buy eggs", completed: false},
      ]
    }
  },
  methods: {
    removeItem(id){
      this.arrTasks = this.arrTasks.filter(t => t.id != id);
    },
    addNewItem(newTask){
      this.arrTasks.push(newTask);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
