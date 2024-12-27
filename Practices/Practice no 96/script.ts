

interface Admin {
    title : string[];
    createTodo(addtodo : string) : void;
    deleteTodo(index : number) : void;
    resetTodo() : void;
    updateTodo(index : number ,  wer : string) : void;
}

class Iadmin implements Admin {
    title : string[];
    constructor(title : string[]) {
        this.title = title;
    }
    createTodo(addtodo : string): void {
         this.title.push(addtodo);
    }
    deleteTodo (index : number) : void {
        this.title.splice(index, 1);
    }
    resetTodo() : void {
        this.title = [];
    }
    updateTodo (index : number , wer : string) : void {
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
















































