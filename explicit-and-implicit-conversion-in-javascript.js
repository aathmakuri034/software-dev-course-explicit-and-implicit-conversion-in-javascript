/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = false; // Boolean("false") make the bool true becuase strings are implictly true
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is invalid"); // edge case where teh isValid is not true
}

let age = "25";
let totalAge = Number(age) + 5; //Need to change the string to number when using addition, otherwise its concatination
console.log("Total Age: " + totalAge);

if("hello world"){ // implicit type conversion string -> true
    console.log("Hello World");
}

let numAge = Number("18"); // explicit type conversion
console.log("Caleb is " + numAge)
