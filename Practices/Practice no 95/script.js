"use strict";
class Todo {
    constructor(title) {
        this.title = title;
    }
    createTodo() {
        return this.title.push('new todo');
    }
    deleteTodo() {
        return this.title.pop();
    }
    resetTodo() {
        return this.title = [];
    }
}
var objOfTodo = new Todo(['todo1', 'todo2', 'todo3']);
// objOfTodo.createTodo();
objOfTodo.deleteTodo();
// objOfTodo.resetTodo();
console.log(objOfTodo);
