// class Laptop1 {
//     constructor(company,screenSize){
//         this.company = company;
//         this.screenSize = screenSize;
//     }
//     printNameCompany(){
//         console.log(`Laptop Company: ${this.company}`);
//     }
// }
// var getColor = prompt("Enter your laptop color")
// var getCompany = prompt("Enter your laptop company")
// var getScreenSize = prompt("Enter your laptop screenSize")
// var getTouchScreen = prompt("Enter your laptop touchScreen")

// var laptopObj1 = new Laptop1(getCompany,getScreenSize)
// console.log(laptopObj1);

// class Laptop2 extends Laptop1{
//     constructor(touchScreen,company,screenSize){
//         super(company,screenSize);
//         this.touchScreen = touchScreen;
//     }
//     printTouchScreen(){
//         console.log(`Touch Screen: ${this.touchScreen}`);
//     }
// }

// var laptopObj2 = new Laptop2(getTouchScreen,laptopObj1.company,laptopObj1.screenSize)
// console.log(laptopObj2);


// class Laptop3 extends Laptop2{
//     constructor(color,touchScreen,company,screenSize){
//         super(company,screenSize,touchScreen);
//         this.color = color;
//     }
//     printTouchScreen(){
//         console.log(`Laptop Color: ${this.color}`);
//     }
// }



// var laptopObj3 = new Laptop3(getColor,laptopObj2.company,laptopObj2.screenSize,laptopObj2.touchScreen)





// console.log(laptopObj3);



