<template>
  <div>
    <h2>Todo</h2>
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
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(json => {
        this.arrTasks = json
      })
  }
}
</script>
