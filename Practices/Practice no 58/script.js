class Laptop{
    constructor(company,screenSize){
        this.company = company
        this.screenSize = screenSize
    }
    printcompanyNames(){
        console.log("company Name =>",this.company);
        
    }
}

var laptopObj = new Laptop("Apple",15)

// laptopObj.company = "HB"
// laptopObj.abc = "wer"
// delete laptopObj.screenSize

console.log(laptopObj);




































