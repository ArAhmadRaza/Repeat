"use strict";
class Ahmad {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class User extends Ahmad {
    constructor(name, age, country) {
        super(name, age);
        this.country = country;
    }
}
var user = new User("Ahmad", 20, "Pakistan");
var user2 = new Ahmad("Ali", 20);
console.log(user);
console.log(user2);
// function add<A,B>(a:A,b:B){
//     console.log(a,b);
// }
// var sum = add<number,number>(10,20);
// var sum2 = add<string,number>("werc",20);
// var sum3 = add<number,string>(10,"20");
// console.log(sum);
// console.log(sum2);
// console.log(sum3);
