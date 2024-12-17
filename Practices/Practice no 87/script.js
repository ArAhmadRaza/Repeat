"use strict";
// function trust(a:number,b:number) {
//     return a+b;
// }
// var result = trust(1,2);
// console.log(result);
// interface Person {          
//     name: string;
//     age: number;
//     city: string;
//     isMarried: boolean;
// }
// interface Employee extends Person {
//     salary: number;
// }
// var admin: Employee = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     isMarried: false,
//     salary: 10000,
// }
// var obj: Person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     isMarried: false,
// }
// console.log(admin);
// Inheritence
class Student {
    constructor(name, age, city, isMarried) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.isMarried = isMarried;
    }
}
class ExtendStudent extends Student {
    constructor(name, age, city, isMarried, salary) {
        super(name, age, city, isMarried);
        this.salary = salary;
    }
}
let student = new ExtendStudent("John", 30, "New York", false, 10000);
console.log(student);
let student1 = new Student("John", 30, "New York", false);
console.log(student1);
