const addOneItem = (state, newTodoItem) => { 
    const obj = {completed: false, item: newTodoItem};
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.idx,1);
}
const toggleItem = (state, payload) => {
    state.todoItems[payload.idx].completed = !state.todoItems[payload.idx].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}
const clearAll = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {
    addOneItem,
    removeItem,
    toggleItem,
    clearAll
}