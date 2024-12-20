
// interface IUser{
//     id:number;
//     name:string;
//     salary? :number;
// }

// class User implements IUser{
//     id:number;
//     name:string;
//     constructor(id:number, name:string){
//         this.id = id;
//         this.name = name;

//     }
// }

// interface IUser2 extends IUser{
//     department:string;
// }


// class User2 extends User implements IUser2{
//     department:string;
//     constructor(id:number, name:string, department:string){
//         super(id, name);
//         this.department = department;
//     }
// }

// var user:IUser = new User(1, "John");
// console.log(user);

// var user2:IUser2 = new User2(2, "Alice", "IT");
// console.log(user2);





// interface IEmployee{
//     id:number;
//     name:string;
//     salary:number;
// }
// class Employee implements IEmployee{
//     id:number;
//     name:string;
//     salary:number;
//     constructor(id:number, name:string, salary:number){
//         this.id = id;
//         this.name = name;
//         this.salary = salary;
//     }
// }

// interface IManager extends IEmployee{
//     department:string;
// }

// class Manager extends Employee implements IManager{
//     department:string;
//     constructor(id:number, name:string, salary:number, department:string){
//         super(id, name, salary);
//         this.department = department;
//     }
// }

// var emp = new Employee(1, "John", 10000);

// var mgr = new Manager(2, "Alice", 75000, "IT");

// console.log("Employee =>>>: " + emp.id + " " + emp.name + " " + emp.salary);
// console.log("Manager =>>>: " + mgr.id + " " + mgr.name + " " + mgr.salary + " " + mgr.department);




























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


































