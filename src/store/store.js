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
    }
})