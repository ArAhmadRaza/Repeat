"use strict";
//Polimorphism
class Dog {
    makeSound() {
        console.log("Dog barks.");
    }
}
class Cat {
    makeSound() {
        console.log("Cat meows.");
    }
}
const dog = new Dog();
const cat = new Cat();
dog.makeSound();
cat.makeSound();
// - Abstraction
// interface IUser {
//     name: string;
//     age: number;
//     email: string;
//     password: string;
//     role: string;
//     login(): void;
// }
// abstract class User implements IUser {
//     name: string;
//     age: number;
//     email: string;
//     password: string;
//     role: string;
//     constructor(name: string, age: number, email: string, password: string, role: string) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.password = password;
//         this.role = role;
//     }
//     abstract login(): void;
// }
// interface IUser {
//     name: string;
//     age: number;
//     email: string;
//     password: string;
//     role: string;
//     login(): void;
// }
// class User implements IUser {
//    private name: string;
//    public age: number;
//    protected email: string;
//     password: string;
//     role: string;
//     constructor(name: string, age: number, email: string, password: string, role: string) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.password = password;
//         this.role = role;
//     }
//     login(): void {
//         console.log(`Hello Function`);
//     }
// }
// const user = new User("John", 20, "john@gmail.com", "123456", "admin");
// console.log(user.login());
