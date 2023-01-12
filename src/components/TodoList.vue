<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, idx) in this.$store.state.todoItems" :key="idx" class="shadow">
        <font-awesome-icon icon="fa-solid fa-check" class="checkBtn" :class="{checkBtnCompleted : todoItem.completed}" @click="toggleComplete(todoItem,idx)"/>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <span class="removeBtn" @click="removeTodo(todoItem.item, idx)">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </span>
      </li>
  </transition-group>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrashCan);
library.add(faCheck);

export default {
  props:['todoItems'],
  components:{
    FontAwesomeIcon
  },
  methods:{
    removeTodo: function(item, idx){
      this.$emit('removeItem', item, idx);
    },
    toggleComplete: function(todoItem, idx){
      this.$emit('toggleItem', todoItem, idx)
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/** transition */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>