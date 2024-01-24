// 1. Use logical operators to find whether the age of the person lies between 10 and 20?

let age = 8;
if (age >= 10 && age <= 20) {
    console.log("The age of the person lies between 10 and 20");
}

    else {
        console.log("The age of the person not lies between 10 and 20");
}
    

// 2. Demonstrate the use of switch case statement in javascript 

let num = 3;
switch (num) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("You entered invalid number!!!");
        break;
}


// 3. Write a JavaScript program to find whether a number is divisible by 2 and 3
let number = 6;

if (number % 2 == 0 && number % 3 == 0) {
    console.log("Number is divisible by 2 and 3.");
    }
    else {
        console.log("Number is not divisible by 2 and 3.");
}
    

// 4. Write a JavaScript program to find whether a number is divisible by either 2 or 3
let checkNumber = 5;

if (checkNumber % 2 == 0 || checkNumber % 3 == 0) {
    console.log("Number is divisible by either 2 or 3.");
    }
    else {
        console.log("Number is not divisible by either 2 or 3.");
}



// 5. Print "You can drive" or "you cannot drive" based on age being greater than 18 using ternary operators

let ageForDriving = 18;
let result = (ageForDriving >= 18) ? "You can drive" : "You cannot drive";
console.log(result);