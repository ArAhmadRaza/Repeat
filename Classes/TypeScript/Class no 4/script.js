"use strict";
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var person = new PersonClass("John", 30);
console.log(person);
// type Person = {
//     name: string;
//     age: number;
// }
// type Person2 = Person & {
//     address: string;
// }
// var person: Person = {
//     name: "John",
//     age: 30
// }
// console.log("person", person);
// var person2: Person2 = {
//     name: "John",
//     age: 30,
//     address: "123 Main St"
// }
// console.log("person2", person2);
// console.log(person2.name);
// console.log(person2.age);
// console.log(person2.address);
// class Person {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// var person = new Person("John", 30);
// console.log(person.name);
// console.log(person.age);
