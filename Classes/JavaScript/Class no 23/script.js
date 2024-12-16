//do while

// let i = 11;

// while (i <= 10) {
//     console.log("While Loop", i);
//     i++
// }

// let j = 11;

// do{
//     console.log("Do While Loop", j);
//     j++;
// }while(j <= 10)

//for in Loop

// var obj = {
//     name: "John",
//     age: 25,
//     city: "New York"
// }

// for(key in obj){
//     console.log(key,obj[key]);
// }

const user = { name: "Alice", age: 30, city: "Wonderland" };
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 30
// city: Wonderland
