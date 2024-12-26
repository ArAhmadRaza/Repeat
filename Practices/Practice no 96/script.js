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
    updateTodo() {
        return this.title[0] = 'updated todo';
    }
}
var todo = new Todo(['todo1', 'todo2']);
todo.createTodo();
// todo.deleteTodo();
// todo.resetTodo();
todo.updateTodo();
console.log(todo);
