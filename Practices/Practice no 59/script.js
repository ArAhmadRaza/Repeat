class Laptops {
    constructor(company,screenSize){
        this.company = company
        this.screenSize = screenSize 
    }
    printNameOfCompany(){
        console.log("company name =>",this.company);
    } 
}


var getCompanyName = prompt("Enter your laptop company name")
var getscreenSize = prompt("Enter your laptop screenSize")

// var num = "hp"
// var num1 = 29

var laptopObj = new Laptops(getCompanyName, getscreenSize)


// delete laptopObj.company
// laptopObj.wer = "rew"
// laptopObj.company = "dell"

console.log(laptopObj);

