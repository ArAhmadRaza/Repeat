interface Itodo {
    title: string[];
    createTodo(): void;
    deleteTodo(): void;
    resetTodo(): void;
    updateTodo(): void;
}

class Todo implements Itodo {
    title: string[];

    constructor(title: string[]) {
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
// todo.deleteTodo();0
// todo.resetTodo();
todo.updateTodo();


console.log(todo);


