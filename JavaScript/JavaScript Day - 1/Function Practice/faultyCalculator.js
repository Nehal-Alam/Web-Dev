/*
Create a faulty calculator using JavaScript.

This faulty calculator does following: 
1. It takes two numbers as input from the user.
2. It perfoms wrong operators as follows: 
+ --> -
* --> +
- --> /
/ --> *

*/


let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

console.log("a + b = ", a - b);
console.log("a * b = ", a + b);
console.log("a - b = ", a / b);
console.log("a / b = ", a * b);

