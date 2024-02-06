/*
Create a faulty calculator using JavaScript.

This faulty calculator does following: 
1. It takes two numbers as input from the user.
2. It perfoms wrong operators as follows: 
+ --> -
* --> +
- --> /
/ --> *

3. It will performs wrong operation 10% of the times.

*/

console.log("Method - 1");

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));

console.log("a + b = ", a - b);
console.log("a * b = ", a + b);
console.log("a - b = ", a / b);
console.log("a / b = ", a * b);

// 3. It will performs wrong operation 10% of the times.
console.log("Method - 2");

randomNumber = Math.random();

if (randomNumber < 0.1) {
  console.log("Performing wrong operation...");
  console.log("Addition : ", a - b);
  console.log("Subtraction : ", a / b);
  console.log("Multiplication : ", a + b);
  console.log("Division : ", a * b);
} else {
  console.log("Correct Operation.");
  console.log("Addition :  ", a + b);
  console.log("Subtraction : ", a - b);
  console.log("Multiplication : ", a * b);
  console.log("Division", a / b);
}
