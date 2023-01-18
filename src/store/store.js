import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length>0){
            for(var i=0; i<localStorage.length; i++){
              var value = JSON.parse(localStorage.getItem(localStorage.key(i)));
              arr.push(value)
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    mutations: {
        addOneItem(state, newTodoItem){ 
            const obj = {completed: false, item: newTodoItem};
            localStorage.setItem(newTodoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeItem(state, payload){
            localStorage.removeItem(payload.item);
            state.todoItems.splice(payload.idx,1);
        },
        toggleItem(state, payload){
            state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed;
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
        },
        clearAll(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }
})