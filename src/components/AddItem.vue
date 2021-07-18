<template>
  <form v-on:submit.prevent="addNewItem">
    <input type="text" v-model="title">
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      title: '',
    }
  },
  methods: {
    addNewItem(){
      if(this.title.trim()){
        const newTask = {
          id: Date.now(),
          title: this.title,
          completed: false
        };

        this.$emit('addNewItem', newTask);
        this.title = '';
      }
    }
  }
}
</script>

<style scoped>
  input {
    font-size: 20px;
    border: 0;
    border-bottom: 1px solid #000;
  }
  button {
    font-size: 20px;
    margin-left: 10px;
    background-color: rgb(23, 206, 6);
    border: 0;
    border-radius: 4px;
    padding: 3px 6px;
    color: white;
  }
  form {
    margin: 30px;
  }
</style>