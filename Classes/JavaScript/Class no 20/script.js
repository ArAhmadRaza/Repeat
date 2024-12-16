//OBJECT ORIENTED PROGRAMMING / OOPS

class Laptop{
    constructor(company, screenSize){
        this.company = company
        this.screenSize = screenSize
    }
    printCompanyName(){
        console.log("Company Name => ", this.company);
    }
}


// var laptops = {
//     company: "dell",
//     screenSize: 15
// }

var getCompanyName = prompt("Enter Your Company Name");
var getScreenSize = prompt("Enter Screen Size Here")

var laptopObj = new Laptop(getCompanyName, getScreenSize)

// console.log(laptopObj);

// delete laptopObj.company
// laptopObj.abc = "sdxg"
// laptopObj.screenSize = 60

console.log(laptopObj);
document.write(laptopObj.company, "\n\n")
document.write(laptopObj.screenSize)

// console.log(laptopObj.printCompanyName());

















































// var laptops = {
//     color:"Black",
//     company:"HP",
//     memory:"16GB",
//     screenSize:"15.6 inches",
//     processor:"Intel Core i5",
//     graphicsCard:"Nvidia GeForce GTX 1050",
//     storage:"256GB SSD"
// }

// var studentNames = ["student1","student2","student3","student4"]

// for(i=0;i<studentNames.length;i++){
//     console.log(studentNames[i]);
    
// }
// var wer =Object.keys(laptops)
// for(i=0;i<wer.length;i++){
//     // console.log(laptops[keys]);z
//     var keys = wer[i]
//     console.log(` ${laptops[keys]}`);
// }

// laptops.color="red",

// laptops.bac = "wer",

// delete laptops.storage

// console.log(laptops)































