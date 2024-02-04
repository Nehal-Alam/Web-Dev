//1.  Write a function that returns the square of a number
function square(num) {
  num = Number(prompt("Enter a number: "));
  return num * num;
}
console.log(square());

// 2. Write a function to convert Celsius to Fahrenheit

function calFahrenheit(celsius) {
  celsius = Number(prompt("Enter celsius: "));
  return (celsius * 9) / 5 + 32;
}
console.log("Fahrenheit: ", calFahrenheit());

// 3. Write a function to find the area of a given Rectangle
function calAreaOfRectangle(length, width) {
  length = Number(prompt("Enter length of the Rectangle: "));
  width = Number(prompt("Enter width of the Rectangle: "));
  return length * width;
}
console.log("Area of Rectangle is ", calAreaOfRectangle());
