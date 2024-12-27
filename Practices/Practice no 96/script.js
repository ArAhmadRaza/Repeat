"use strict";
class Iadmin {
    constructor(title) {
        this.title = title;
    }
    createTodo(addtodo) {
        this.title.push(addtodo);
    }
    deleteTodo(index) {
        this.title.splice(index, 1);
    }
    resetTodo() {
        this.title = [];
    }
    updateTodo(index, wer) {
        this.title[index] = wer;
    }
}
let admin = new Iadmin(["Admin", "Super Admin"]);
admin.createTodo("New Todo");
// admin.createTodo("New Todo 2");
// admin.deleteTodo(1);
// admin.resetTodo();
admin.updateTodo(1, "Updated Todo");
console.log(admin);
