"use strict";
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    constructor(id, name, salary, department) {
        super(id, name, salary);
        this.department = department;
    }
}
var emp = new Employee(1, "John", 10000);
var mgr = new Manager(2, "Alice", 75000, "IT");
console.log("Employee =>>>: " + emp.id + " " + emp.name + " " + emp.salary);
console.log("Manager =>>>: " + mgr.id + " " + mgr.name + " " + mgr.salary + " " + mgr.department);
//Generics
// function identity<A, B>(a:A[], b:B[]){
// }
// var returnVlaue = identity<number, string>([10,20,30], ["Hello", "World"]);
// var returnVlaue2 = identity<string, number>(["Hello", "World"], [10,20,30]);
// var returnVlaue3 = identity<boolean, string>([true, true, true], ["Hello", "World"]);
// var returnVlaue = identity<number>(10);
// var returnVlaue2 = identity<string>("Hello");
// var returnVlaue3 = identity<boolean>(true);
// var returnVlaue2 = identity<string>("dfgfdg");
