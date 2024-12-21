
interface IUser{
    name:string;
    age:number;
}

class User implements IUser{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;{
        
    }
}

}


interface IAdmin extends IUser{
    country:string;
}


class Admin extends User implements IAdmin{
    country:string;
    constructor(name:string,age:number,country:string){
        super(name,age);
        this.country = country;{
    }
}

}

var user = new User("John",30);
var admin = new Admin("John",30,'newyork');


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


































