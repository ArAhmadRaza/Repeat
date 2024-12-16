class Laptops {
    constructor(company,screenSize){
        this.company = company
        this.screenSize = screenSize
    }
    printNameCompany(){
        console.log("company name =>",this.company)
    }
}

class Laptop2 extends Laptops{
    constructor(arrayOfObject,company,screenSize){
    super(company,screenSize)
    this.arrayOfObject = arrayOfObject
}
}



var laptopObj = new Laptops("HB", 16)

var laptopObj2 = new Laptop2(["wer1","wer2","wr3"],laptopObj.company,laptopObj.screenSize)
laptopObj2.wer = "rew"

console.log(laptopObj)
console.log(laptopObj2)
