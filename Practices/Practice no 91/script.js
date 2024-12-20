"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var obj = new Person("John", 30);
console.log(obj);
// class Person{
//     name : string;
//     age : number;
//     constructor(name : string, age : number){
//         this.name = name;
//         this.age = age;
//     }
// }
// interface IPerson implements Person{
//     name : string;
//     age : number;
// }
// var obj = new Person("John", 30);
// console.log(obj);
