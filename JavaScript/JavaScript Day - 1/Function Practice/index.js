console.log("Namaste World");

var a = 5;
var a = 5;
console.log(a);

// Object
let person= {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);

// Array
let names = ['Nehal', 'Sahil', 'Rahul'];
console.log(names[0]);
console.log(names[3]);
names[3] = 'karan';
console.log(names);

// Ternary Operator     
let age = 20;
let vote= (age >= 18) ? 'I can Vote' : 'I cannot Vote';
console.log(vote);

// Conditions
// if else condition
let marks = 82;
if (marks >= 90) {
    console.log('A Grade');
}
else if (marks >= 80) {
    console.log('B Grade');
}
else if (marks >= 70) {
    console.log('C Grade');
}
else if (marks >= 60) {
    console.log('D Grade');
}
else {
    console.log('E Grade');
}


// Switch Conditon
let week = 5;
switch (week) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid Input');
}


// Loops
// for loop
for (let i = 0; i < 5; i++){
    console.log(i);
}

// While Loop
let j = 5;
while (j < 10) {
    console.log(j);
    j++;
}

// Do while loop
let k = 10;
do {
    console.log(k);
    k++;
} while (k < 15);

