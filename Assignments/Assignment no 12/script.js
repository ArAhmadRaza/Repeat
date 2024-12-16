// Loop Exersise:
// 1. Write a js program to print all natural numbers from 1 to n. - using while loop
// var i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 2. Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

// var i = 10;

// while(i >= 1){
//     console.log(i)
// i--
// }

// 3. Write a js program to print all alphabets from a to z. - using while loop

// 4. Write a js program to print all even numbers between 1 to 100. - using while loop

// var i = 1;

// while(i <= 100){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// i++
// }

// 5. Write a js program to print all odd number between 1 to 100.

// var i = 1;

// while(i <= 100){
//     if(i % 2 == 1){
//         console.log(i)
//     }
// i++
// }

// 6. Write a js program to find sum of all natural numbers between 1 to n.

/*
var i = 1;
var sum = 0;
var n = 10;

while (i <= n) {
    sum = sum  + i;
    i++
    }
    console.log(sum)
    */

// 7. Write a js program to find sum of all even numbers between 1 to n.

// var i = 1;
// var sum = 0;
// var n = 10;

// while (i <= n) {
//     if( i % 2 == 0){
        
//         sum = sum + i;
    
//    }
//    i++
// }
// console.log(sum);


// 8. Write a js program to find sum of all odd numbers between 1 to n.



// var i = 1;
// var sum = 0;
// var n = 10;

// while (i <= n) {
//     if( i % 2 == 1){
        
//         sum = sum + i;
    
//    }
//    i++
// }
// console.log(sum);








// If-else exercise


// 1. Write a js program to find maximum between two numbers.

// var i = 400;

// var o = 4000;



// if(i > o){
//     console.log(i," is Big")
// }
// else if(i < o){
//     console.log(o," is Big ");
    
// }
// else{
//     console.log("both are equal");
    
// }








// 2. Write a js program to find maximum between three numbers.

// var num1 = 30;

// var num2 = 300;

// var num3 = 300;

// if(num1 > num2 && num1 > num3){
//     console.log(num1 , " is big")
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(num2 , " is big");
// }
// else if(num3 > num1 && num3 > num2){
//     console.log(num3 , " is big");
// }
// else if(num1 == num2 && num1 > num3){
//     console.log("num1 and num2 both are equal and greater than num3");
// }
// else if(num1 == num2 && num1 < num3){
//     console.log("num1 and num2 both are equal and less than num3");
// }
// else if(num1 == num3 && num1 > num2){
//     console.log("num1 and num3 both are equal and greater than num2");
// }
// else if(num1 == num3 && num1 < num2){
//     console.log("num1 and num3 both are equal and less than num2");
// }
// else if(num2 == num3 && num2 > num1){
//     console.log("num2 and num3 both are equal and greater than num1");
// }
// else if(num2 == num3 && num2 < num1){
//     console.log("num2 and num3 both are equal and less than num1");
// }
// else{
//     console.log("All numbers are equal");
// }






// 3. Write a js program to check whether a number is negative, positive or zero.


// var num = 2;

// if(num > 0){
//     console.log("positive")
// }
// else if(num < 0){
//     console.log("negative");
// }
// else{
//     console.log(" zero ");
// }








// 4. Write a js program to check whether a number is divisible by 5 and 11 or not.


// var num = 99;
// if(num % 5 == 0 && num % 11 == 0){
//     console.log(" num divisible by both 5 and 11 ")
// }
// else if(num % 5 == 0){
//     console.log(" num exactly divisible by 5 ");
// }

// else if(num % 11 == 0){
//     console.log(" num exactly divisible by 11");
// }
// else{
//     console.log(" num not divisible by 5 and 11 ");
// }










// 5. Write a js program to check whether a number is even or odd.


// var num = 0;

// if(num %  2 == 0){
//     console.log(" Even "); 
// }
// else{
//     console.log(" Odd "); 
// }










// 6. Write a js program to check whether a year is leap year or not.


// var num = 2013;

// if(num % 4 == 0){
//     console.log(" leap year");
// }
// else{
//     console.log(" normal year");
// }







// 7. Write a js program to check whether a character is alphabet or not.
// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// 9. Write a js program to input any character and check whether it is alphabet, digit or special character.
// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.
// 11. Write a js program to input week number and print week day.



// var num = 8;

// if(num == 1){
//     console.log("Monday")
// }
// else if(num == 2){
//     console.log("Tuesday")
// }
// else if(num == 3){
//     console.log("Wednesday")
// }
// else if(num == 4){
//     console.log("Thursday")
// }
// else if(num == 5){
//     console.log("Friday")
// }
// else if(num == 6){
//     console.log("Saturday")
// }
// else if(num == 7){
//     console.log("Sunday")
// }
// else{
//     console.log("Week has only seven days")
// }







// 12. Write a js program to input month number and print number of days in that month.


// var num = 12;

// if(num == 1){
//     console.log("Jan has 31 day")
// }
// else if(num == 2){
//     console.log("Feb has 28 day")
// }
// else if(num == 3){
//     console.log("Mar has 31 day")
// }
// else if(num == 4){
//     console.log("Apr has 30 day")
// }
// else if(num == 5){
//     console.log("May has 31 day")
// }
// else if(num == 6){
//     console.log("June has 30 day")
// }
// else if(num == 7){
//     console.log("July has 31 day")
// }
// else if(num == 8){
//     console.log("Aug has 31 day")
// }
// else if(num == 9){
//     console.log("Sep has 30 day")
// }
// else if(num == 10){
//     console.log("Oct has 31 day")
// }
// else if(num == 11){
//     console.log("Nov has 30 day")
// }
// else if(num == 12){
//     console.log("Dec has 31 day")
// }
// else{
//     console.log("1 year has only 12 months")
// }



// 13. Write a js program to count total number of notes in given amount.
// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.


// var num = 3;
// if(num == 3){
//     console.log("It is a triangle")
// }
// else{
//     console.log("triangle has three sides")
// }










// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// 17. Write a js program to find all roots of a quadratic equation.



// 18. Write a js program to calculate profit or loss.
// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit



























