<template>
  <div id="app">
    <TodoHeaderVue></TodoHeaderVue>
    <TodoInputVue></TodoInputVue>
    <TodoListVue :todoItems="todoItems" 
    ></TodoListVue>
    <TodoFooterVue></TodoFooterVue>
  </div>
</template>

<script>
/* eslint-disable */
import TodoHeaderVue from './components/TodoHeader.vue';
import TodoInputVue from './components/TodoInput.vue';
import TodoListVue from './components/TodoList.vue';
import TodoFooterVue from './components/TodoFooter.vue';

export default {
  data(){
    return {
      todoItems:[]
    }
  },
  methods:{
    // addOneItem(newTodoItem){ // addOneItem : function(){}
    //   const obj = {completed: false, item: newTodoItem};
    //   localStorage.setItem(newTodoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(item, idx){
    //   localStorage.removeItem(item)
    //   this.todoItems.splice(idx,1);
    // },
    // toggleOneItem(todoItem, idx){
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[idx].completed = !this.todoItems[idx].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    // },
    // clearAllItem(){
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
 components: {
  TodoFooterVue,
  TodoHeaderVue,
  TodoInputVue,
  TodoListVue
 }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
