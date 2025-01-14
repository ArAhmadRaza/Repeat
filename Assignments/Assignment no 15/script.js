// // 1. Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(student);

// Sample Output: name,sclass,rollno



// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// // Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// delete student.rollno
// console.log(student);









// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// var student1 = Object.keys(student).length

// console.log(student1);















// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games',
//        readingStatus: false
//    }];


// function wer(library){
//     library.forEach(book => {
//        console.log("author",book.author);
//        console.log("title",book.title);
//        console.log("readingStatus",book.readingStatus);
//        console.log("-------------------------");
        
//     });
// }

// wer(library)













// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.


// var value = {
//     r:10,
//     h:20,
// }
 
// var V = 3.14 * value.r * 2 * value.h;

// value.V = V

// console.log(V);


// console.log(value);







// 6. Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

// 7. Write a JavaScript program which returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

// 8. Write a JavaScript program to create a Clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

// var area = {
//     Pi : 3.14,
//     r : 2,
// }

// var a = area.Pi * area.r * area.r

// area.a = a
// console.log(a);
// console.log(area);  

// var perimeter = {
//     length : 3,
//     wirth : 2,
// }

// var P = 2 * (perimeter.length + perimeter.wirth)

// perimeter.P = P
// console.log(P);
// console.log(perimeter);  
 
 
// 10. Write a JavaScript program to sort an array of JavaScript objects.
// Sample Object :

// var library = [
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]

// 11. Write a JavaScript function to print all the methods in an JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

// 12. Write a JavaScript function to parse an URL.

function parseURL(url) {

    const parsedUrl = new URL(url);

    return {
        href: parsedUrl.href,
        protocol: parsedUrl.protocol,
        host: parsedUrl.host,
        hostname: parsedUrl.hostname,
        port: parsedUrl.port,
        pathname: parsedUrl.pathname,
        search: parsedUrl.search,
        hash: parsedUrl.hash,
        origin: parsedUrl.origin,
        params: Object.fromEntries(parsedUrl.searchParams) // Extract query parameters as an object
    };
}

// Sample URL
const url = "https://example.com:8080/path/to/page?name=JohnDoe&age=25#section1";
console.log(parseURL(url));


// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// 14. Write a JavaScript function to retrieve all the values of an object's properties.

// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// 17. Write a JavaScript function to check whether an object contains given property.
