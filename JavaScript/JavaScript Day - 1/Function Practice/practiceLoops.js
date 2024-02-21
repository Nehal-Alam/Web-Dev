// 1. Write a program to print the marks of a student in an object using for loop

let obj = {
  Harry: 98,
  Rohan: 70,
  Nehal: 13,
  Karan: 85,
  Bharat: 80,
};

for (let i = 0; i < 1; i++) {
  console.log(obj);
}

// 2. Write the program in Q1 using for in loop.
for (let key in obj) {
  let value;
  value = obj[key];

  console.log(key + " - " + value);
}

// 3. Wirte a program to print "Try Again" until the user enters the correct Number
const password = 13;
let userInput;
while (true) {
  userInput = Number(prompt("Guess the secret Password: "));
  if (userInput === password) {
    console.log("Access Granted!");
    break;
  } else {
    console.log("Access Denied! Try Again");
  }
}

// 4.    Write a program to find mean of 5 numbers.
let num = 0;
let i = 0;
let sum = 0;

while (i < 5) {
  num = Number(prompt("Enter number: "));
  sum = sum + num;
  i++;
}
console.log("Sum", sum);
let mean = sum / i;
console.log("Mean", mean);

// For-in Loop
let rectangle = {
  length: 2,
  breath: 5,
};

for (key in rectangle) {
  console.log(key, rectangle[key]);
} 
