// Creating Arrays
let arr = [1, 2, 3];
console.log(arr);

// Adding  Element to end of an array
arr.push(4);
console.log(arr);

// Adding Element beginning  of the array
arr.unshift(0);
console.log(arr);

// Adding element middle of the Array
arr.splice(2, 0, "a", "b");
console.log(arr);

// Deleting element from end of the array
arr.pop();
console.log(arr);

// Deleting element from begining of the array
arr.shift();
console.log(arr);

// Deleting element from Middle of the array
arr.splice(1, 2);
console.log(arr);

// SEARCHING
// Check a  specific value in the array using indexOf() and include() method
console.log(arr.includes(2));
console.log(arr.indexOf("a", 0));

// Creating an Object Array
let student = [
  { roll_no: 1, name: "John" },
  { roll_no: 2, name: "Nehal" },
  { roll_no: 3, name: "Carl" },
];

// Accessing object property
console.log(student[1]);

// Check a specific  key-value pair in the array using find() method
let result = student.find(function (detail) {
  return detail.name == "Carl";
});

// Searching with arrow function
console.log(result);
let result1 = student.find((detail) => detail.name == "Carl");
console.log(result);

// Empty an Array
let emptyArr = [1, 2, 3, 4, 5, 6, 7];
console.log(emptyArr);
// Empty
emptyArr.length = 0;
console.log(emptyArr);

// Combining an arrays
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
console.log(num1.concat(num2));
// OR
let combineArray = num1.concat(num2);
console.log(combineArray);

// Slicing an Array
console.log(combineArray.slice(2, 4));

// Combining an Object Array
let objArray1 = [
  { no: 1, name: "John" },
  { no: 2, name: "Jane" },
];
let objArray2 = [
  { no: 3, name: "Alice" },
  { no: 4, name: "Bob" },
];
let combineObjArray = objArray1.concat(objArray2);
console.log(combineObjArray);

// Slicing an object array
console.log(combineObjArray.slice(1, 3));

// Combine two array using Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined);

// Iterating an Array
let marks = [10, 20, 30, 40, 50];

// 1. for of loop
for (let value of marks) {
  console.log(value);
}

// 2.  For each Loop
marks.forEach(function (markScore) {
  console.log(markScore);
});

// Joinning an Array
let joinNumber = [1, 2, 3, 4, 5, 6];
console.log(joinNumber.join("|"));
console.log(joinNumber.join(","));

// Spliting an Array
let splitString = "Hello World";
console.log(splitString.split(" "));

// Sorting an Array
let sortNumber = [3, 5, 2, 7, 8, 1];
console.log(sortNumber.sort());

console.log(sortNumber.reverse());

// Sorting an Object Array
let sortObj = [
  { id: 1, name: "Nehal" },
  { id: 4, name: "Carl" },
  { id: 2, name: "John" },
  { id: 3, name: "Alice" },
];

let sortResult = sortObj.sort(
  (firstItem, secondItem) => firstItem.id - secondItem.id
);
console.log(sortResult);

// Filtering an Array
let filterNumber = [1, 4, 5, -1, -4, 7];

let filtered1 = filterNumber.filter((value) => value >= 0);
// OR
let filtered = filterNumber.filter(function (value) {
  return value <= 0;
});

console.log(filtered1);
console.log(filtered);


// Mapping with primitives
let mapNum = [1, 2, 3, 4, 5];

let mapItem = mapNum.map((value) => "Roll No" + " " + value);
console.log(mapItem);

// OR

let mapItem1 = mapNum.map(function (value) {
  return "Roll No" + " " + value;
});
console.log(mapItem1);
