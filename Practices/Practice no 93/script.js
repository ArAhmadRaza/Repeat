"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        {
        }
    }
}
class Admin extends User {
    constructor(name, age, country) {
        super(name, age);
        this.country = country;
        {
        }
    }
}
var user = new User("John", 30);
var admin = new Admin("John", 30, 'newyork');
console.log(user);
console.log(admin);
// function tree<A,B>(a:A, b:B){
//     console.log(a,b);
// }
// var tree1 = tree<number,number>(1,2);
// var tree2 = tree<string,number>("ewrwfd",2);
// var tree3 = tree<number,string>(1,"svxhgzsdc");
// console.log(tree1);
// console.log(tree2);
// console.log(tree3);
