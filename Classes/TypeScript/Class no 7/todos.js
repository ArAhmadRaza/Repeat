"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class Todo {
    constructor(title) {
        this.title = title;
    }
    createTodo(index, todo) {
        // return this.title.push("New Value");
        return this.title.splice(index, 0, ...todo);
    }
    deleteTodo(index) {
        // return this.title.pop();
        return this.title.map((todo) => todo.id === index ? Object.assign(Object.assign({}, todo), { completed: true }) : todo);
    }
    resetTodo() {
        // return this.title.length = 0;
        return this.title = [];
    }
    updateTodo(index, todo) {
        // this.title[index] = todo;
        return this.title.splice(index, 1, todo);
        //  return this.title.map((item) => item.id === index ? todo : item );
        // return this.title;
    }
}
const saveTodoInTexFile = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield todo.map((item) => {
            return `${item.id} ${item.title} ${item.completed} ${item.description} \n`;
        });
        yield fs_1.promises.writeFile("todos.txt", data);
    }
    catch (error) {
        console.log("Error=>>", error);
    }
});
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
});
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
