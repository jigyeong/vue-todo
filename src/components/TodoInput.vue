<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
    <span class="addContainer" v-on:click="addTodo">
      <font-awesome-icon icon="fa-solid fa-plus" class="addBtn"/>
    </span>
    <MyModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <FontAwesomeIcon icon="fa-solid fa-x" @click="showModal=false"/>
      </h3>
      <span slot="body">
        아무것도 입력하지 않았습니다!
      </span>
    </MyModal>
  </div>
</template>

<script>
/* eslint-disable */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MyModal from './common/MyModal.vue';

library.add(faPlus);
library.add(faX);

export default {
  data: function(){
    return {
      newTodoItem : "",
      showModal: false
    }
  },
  components: {
    FontAwesomeIcon
    , MyModal
  },
  methods:{
    addTodo : function(){
      if(this.newTodoItem !== ''){
        // this.$emit('상위 컴포넌트로 올려줄 이벤트이름', 인자1, 인자2...)
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput();
      }
      else {
        this.showModal = !this.showModal
      }
    },
    clearInput : function(){
      this.newTodoItem="";
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>