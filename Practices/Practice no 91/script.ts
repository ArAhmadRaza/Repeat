
interface IPerson{
    name : string;
    age : number;
    rollNo : number;
}

class Person implements IPerson{
    name : string;
    age : number;
    rollNo : number;
    constructor(name : string, age : number, rollNo : number){
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
}

var obj:IPerson = new Person("John", 30, 101);
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




































