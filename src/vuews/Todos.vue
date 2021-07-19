<template>
  <div>
    <h2>Todos</h2>
    
    <AddItem 
      v-on:addNewItem = "addNewItem"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <Loader v-if="loading" />
    <TodoList 
      v-else-if="filterList.length"
      v-bind:arrTasks="filterList"
      v-on:removeItem = "removeItem"
    />
    <div v-else>List is Empty</div>
    <router-link to="/">Go home page</router-link>
  </div>
</template>


<script>
import TodoList from "@/components/TodoList";
import AddItem from "@/components/AddItem";
import Loader from "@/components/Loader";

export default {
  name: 'App',
  components: {
    TodoList,
    AddItem,
    Loader
  },
  data(){
    return {
      arrTasks: [],
      loading: true,
      filter: 'all'
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
        this.arrTasks = json,
        this.loading = false
      })
  },
  computed: {
    filterList() {
      if (this.filter === 'all'){
        return this.arrTasks;
      }

      if (this.filter === 'completed'){
        return this.arrTasks.filter(t => t.completed);
      }

      if (this.filter === 'not-completed'){
        return this.arrTasks.filter(t => !t.completed);
      }
    }
  }
}
</script>
