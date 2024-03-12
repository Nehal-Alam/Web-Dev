// Functions in JavaScript

// Function to Print Hello World
function wish() {
  console.log("Hello World");
}
wish();

// Function to print counting
function counting() {
  for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
}
console.log(counting());

// Function to add two numbers
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// There are two types of Function in JavaScript:
// 1. Named Function
function sayHello() {
  // console.log("Hello! Chief");
  return "Hello! Chief";
}
console.log(sayHello());

// 2. Anonymous Function
let hello = function () {
  return "Hello!!!";
};
console.log(hello());

// Arguments in Function
function addNum() {
  //   console.log(arguments)
  let total = 0;
  for (let value of arguments) {
    total = total + value;
  }
  return total;
}
console.log(addNum(5, 6, 2, 2, 46, 6, 2, 1));

// Rest Parameter
function num(...args) {
  console.log(args);
  let total = 0;
  for (let value of args) {
    total = total + value;
  }
  return total;
}
console.log(num(1, 2, 3, 4, 5, 6, 7));

// Default Parameter
function areaCircle(r, pi = 3.14) {
  return pi * r * r;
}
console.log("Area of Circle is: ", areaCircle(2));

// Getter & Setter
let person = {
  fName: "Nehal",
  lName: "Alam",

  get fullName() {
    return `${person.fName} ${person.lName}`;
  },

  set fullName(values) {
    let part = values.split(" ");
    this.fName = part[0];
    this.lName = part[1];
  },
};
// console.log(name);
person.fullName = "Rahul Kushwaha";
console.log(person.fullName);

let marks = {
  name: "Nehal",
  mark: 80,
  set displayMarks(value) {
    if (typeof value !== String) throw new Error("Invalid Input");
    let part = value.split(" ");
    marks.name = part[0];
    marks.mark = part[1];
  },
  get displayMarks() {
    return `${marks.name} ${marks.mark}`;
  },
};
try {
  marks.displayMarks = "Rahul";
  console.log(marks.displayMarks);
} catch (error) {
  // alert(error);
}
// marks.displayMarks = "Rahul:30";
console.log(marks.displayMarks);

// Reduce method
let arr = [1, 2, 3, 4, 5];
let totalSum = arr.reduce((a, b) => a + b);
console.log("Printing total sum: ")
console.log(totalSum);

console.log("Printing multiplication : ");
let multiplication = arr.reduce((a, b) => a * b);
console.log(multiplication)