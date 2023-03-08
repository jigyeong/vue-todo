<template>
  <div id="app">
    <TodoHeaderVue></TodoHeaderVue>
    <TodoInputVue></TodoInputVue>
    <TodoListVue></TodoListVue>
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
 components: {
  TodoFooterVue,
  TodoHeaderVue,
  TodoInputVue,
  TodoListVue
 }
}
</script>

<style>
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
