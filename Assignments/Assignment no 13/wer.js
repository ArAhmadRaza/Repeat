// Functions
// 1. Write a js program to find cube of any number using function.
// function wer(){
// var a = 5;
// console.log(a**3);
// }
// wer()
// 2. Write a js program to find diameter, circumference and area of circle using functions.
// function wer(){
// var rad = 15;
// var dia = rad * 2;
// var cir = dia *  3.14;
// var area = 3.14 * rad**2;
// console.log("area",area)
// console.log("circumference",cir)
// return dia
// }
// var result = wer()
// console.log("diameter",result)
// 3. Write a js program to find maximum and minimum between two numbers using functions.
// function wer(){
//   var a = 2;
//   var b = 4;
//   if(a>b){
//     console.log("a is greater than b");
//   }
//   else if(b>a){
//     console.log("b is greater than a");
//   }
//   else{
//     console.log("a and b are equal");
//   }
// }
// wer()
// 4. Write a js program to check whether a number is even or odd using functions.
// function wer(){
//     var a = 4;
//     if(a % 2 == 0){
//         console.log("Even number")
//     }
//     else{
//         console.log("odd number")
//     }
// }
// wer()
// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
// var num = 91;
// if(num == 1){
// console.log(num,"is not a prime and composite number ");
// }
// else if(num < 1){
//     console.log(num,"is not a prime number")
// }
// else{
//     for(var a = 2;a < num;a++){
//         if(num % a == 0){
//             var res = `${num} is not a prime number`
//             break;
//         }
//         else{
//             var res = `${num} is a prime number`
//         }
//     }
//     console.log(res);
// }
// var number = prompt("please enter a number")
// var temp = number;
// var sum = 0;
// while(temp > 0){
// // console.log(temp);
//     var digit = temp % 10;
//     // console.log(digit);
//     // console.log(digit**3);
//     sum += digit ** 3;
//     // console.log("sum = ",sum);
//     temp = parseInt(temp / 10)
//     // console.log(temp);
// }
// if(sum == number){
//     console.log(number,"is an armstrong number");
// }
// else{
//     console.log(number,"is not an armstrong number");
// }
// 6. Write a js program to find all prime numbers between given interval using functions.
// 7. Write a js program to print all strong numbers between given interval using functions.
// 8. Write a js program to print all Armstrong numbers between given interval using functions.
// 9. Write a js program to print all perfect numbers between given interval using functions.
// 10. Write a js program to find power of any number using function.
// 11. Write a js program to print all natural numbers between 1 to n using function.
// function wer(){
//     var n = 100;
//     for(var i = 1; i <= n; i++){
//         console.log(i);
//     }
// }
// wer()
// 12. Write a js program to print all even or odd numbers in given range using function.
// function wer() {
//   var n = 100;
//   for (var i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//       console.log(i, "even");
//     } else {
//       console.log(i, "odd");
//     }
//   }
// }
// wer();
// var num = 100
// for(i = 1;i <= 100; i++ + i++){
//     console.log(i);
// }
// 13. Write a js program to find sum of all natural numbers between 1 to n using function.
// function wer(){

//     var sum = 0;
//     for(i = 1;i <= 10;i++){
//         sum = sum + i;

//     }
//     console.log(sum)
// }
// wer()
// 14. Write a js program to find sum of all even or odd numbers in given range using function.


// function wer(){

//     var er = 0;
//     var we = 0

//         for(i = 1;i <= 10;i++){
//             if(i%2==0){
//                 er = er + i;
//             }
//             else{
//                  we = we + i;
//             }
    
//         }
//         console.log(er,"even")
//         console.log(we,"odd")

//     }
//     wer()




// 15. Write a js program to find reverse of any number using function.
// 16. Write a js program to check whether a number is palindrome or not using function.
// 17. Write a js program to find sum of digits of a given number using function.
// 18. Write a js program to find factorial of any number using function.
// 19. Write a js program to generate nth Fibonacci term using function.
// 20. Write a js program to find GCD (HCF) of two numbers using function.
// 21. Write a js program to find LCM of two numbers using function.
// 22. Write a js program to display all array elements using function.

// var array = ["gdughfujvjuhhhhh","hfghffbvhjf","jnjgbfdhgbhfnbgvu"]


// console.log(array)







// 23. Write a js program to find sum of elements of array using function.
// 24. Write a js program to find maximum and minimum elements in array using function.14. Write a js program to find sum of all even or odd numbers in given range using function.
// 15. Write a js program to find reverse of any number using function.
// 16. Write a js program to check whether a number is palindrome or not using function.
// 17. Write a js program to find sum of digits of a given number using function.
// 18. Write a js program to find factorial of any number using function.
// 19. Write a js program to generate nth Fibonacci term using function.
// 20. Write a js program to find GCD (HCF) of two numbers using function.
// 21. Write a js program to find LCM of two numbers using function.
// 22. Write a js program to display all array elements using function.
// 23. Write a js program to find sum of elements of array using function.
// 24. Write a js program to find maximum and minimum elements in array using function.
// Function to find the maximum element in an array
// Function to find the maximum element in an array
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// // Function to find the minimum element in an array
// function findMin(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// // Example usage
// const numbers = [12, 4, 9, 22, 5];
// const maxElement = findMax(numbers);
// const minElement = findMin(numbers);

// console.log("Maximum element:", maxElement);
// console.log("Minimum element:", minElement);
