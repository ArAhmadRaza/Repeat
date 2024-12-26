
import { promises as fs } from "fs";


type TodoType = {
    id: number;
    title: string;
    completed: boolean;
    description: string;
}

interface iTodo {
    title: TodoType[];
    createTodo(index: number, todo: TodoType[]): TodoType[];
    deleteTodo(index: number): TodoType[];
    resetTodo(): void;
    updateTodo(index: number, todo: TodoType): TodoType[];
}

class Todo implements iTodo {
    title: TodoType[];
    constructor(title: TodoType[]) {
        this.title = title;
    }
    createTodo(index: number, todo: TodoType[]): TodoType[] {
        // return this.title.push("New Value");
        return this.title.splice(index, 0, ...todo);

    }
    deleteTodo(index: number): TodoType[]{
        // return this.title.pop();
        return this.title.map((todo) => todo.id === index ? {...todo, completed: true} : todo);
    }
    resetTodo(){
        // return this.title.length = 0;
        return this.title = [];
    }
    updateTodo(index: number, todo: TodoType): TodoType[]{
        // this.title[index] = todo;
        return this.title.splice(index, 1, todo)
    }
}

const saveTodoInTexFile = async (todo: TodoType[]): Promise<void> => {
    try {
        const data = await todo.map((item) => {
            return `${item.id} ${item.title} ${item.completed} ${item.description} \n`;
        })
        await fs.writeFile("todos.txt", data);
    } catch (error) {
        console.log("Error=>>", error);
    }
}



let todo = new Todo([{
    id: 1,
    title: "Learn TypeScript",
    completed: false,
    description: "Learn TypeScript"
}, {
    id: 2,
    title: "Learn ReactJS",
    completed: false,
    description: "Learn ReactJS"
}
]);



// todo.updateTodo(3, "Learn React Native");
// todo.deleteTodo(1);
todo.createTodo(1, [{
    id: 3,
    title: "Learn React Native",
    completed: false,
    description: "Learn React Native"
}
]);
todo.updateTodo(1, {
    id: 2,
    title: "updated ReactJS",
    completed: false,
    description: "updated ReactJS"
})


console.log(todo);

saveTodoInTexFile(todo.title);















































// import { promises as fs } from "fs";

// interface iTodo {
//     title: string[];
//     createTodo(index: number, todo: string[]): string[];
//     deleteTodo(index: number): string[];
//     resetTodo(): void;
//     updateTodo(index: number, todo: string): string[];
// }

// class Todo implements iTodo {
//     title: string[];
//     constructor(title: string[]) {
//         this.title = title;
//     }
//     createTodo(index: number, todo: string[]): string[] {
//         // return this.title.push("New Value");
//         return this.title.splice(index, 0, ...todo);

//     }
//     deleteTodo(index: number): string[]{
//         // return this.title.pop();
//         return this.title.splice(index, 1);
//     }
//     resetTodo(){
//         // return this.title.length = 0;
//         return this.title = [];
//     }
//     updateTodo(index: number, todo: string): string[]{
//         // this.title[index] = todo;
//        return this.title.splice(index, 1, todo);
//     }
// }

// const saveTodoInTexFile = async (todo: string[]): Promise<void> => {
//     try {
//         await fs.writeFile("todos.txt", todo.join("\n"));
//     } catch (error) {
//         console.log("Error=>>", error);
//     }
// }



// let todo = new Todo(["Learn TypeScript", "Learn ReactJS", "Learn NextJS"]);

// // todo.createTodo();
// // todo.deleteTodo();
// // todo.resetTodo();
// // todo.updateTodo(1, "Learn React Native");
// todo.updateTodo(3, "Learn React Native");
// todo.deleteTodo(1);
// todo.createTodo(1, ["Learn React Native", "Learn NodeJS"]);


// saveTodoInTexFile(todo.title);

// console.log(todo);









// npm install @types/node --save-dev
























































