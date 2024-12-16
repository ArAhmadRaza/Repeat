class Laptops {
    constructor(company,screenSize){
        this.company = company
        this.screenSize = screenSize 
    }
    printNameOfCompany(){
        console.log("company name =>",this.company);
    } 
}

class Laptop2 extends Laptops{
    constructor(arrayOfObjects, company, screenSize) {
        super(company, screenSize)
        this.arrayOfObjects = arrayOfObjects
    }
}
var getCompanyName = prompt("Enter your laptop company name")
var getscreenSize = prompt("Enter your laptop screenSize")

var laptopObj = new Laptops(getCompanyName, getscreenSize)

var laptopObj2 = new Laptop2(["object1", "object2", "object3"],laptopObj.company,laptopObj.screenSize)

console.log(laptopObj);
console.log(laptopObj2);





// var obj = {
//     company: "dell",
//     RAm: 8
// }
// var obj2 = {
//     company: "dell",
//     RAm: 8,
//     screenSize: 20
// }


// console.log(obj);
// console.log(obj2);













// var getCompanyName = prompt("Enter your laptop company name")
// var getscreenSize = prompt("Enter your laptop screenSize")

// var num = "hp"
// var num1 = 29

// var laptopObj = new Laptops(getCompanyName, getscreenSize)


// delete laptopObj.company
// laptopObj.wer = "rew"
// laptopObj.company = "dell"


