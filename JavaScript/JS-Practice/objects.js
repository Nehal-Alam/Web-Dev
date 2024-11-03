// Object
let rectangle = {
  length: 3,
  breadth: 2,
};
// Calling Object
console.log(rectangle);

// Types of Object:
// 1. Factory Function  -> Initialise the property/ method and return the values.
function areaOfRectangle(length, breadth) {
  return values = {
    length,
    breadth,
    area() {
      console.log("Area of Rectangle: ", length * breadth);
    },
  };
}

// console.log(areaOfRectangle.area(5,6));
let printRectangle = areaOfRectangle(5, 6);
console.log(printRectangle.area());

// 2. Constructor Function  -> Initialise the property/method using 'this' keyword.
// Pascal Notions -> NumberOfStudent
// this -> current object

function Rectangle(length, breadth) {
  this.length;
  this.breadth;

  this.Area = function () {
    console.log("Area of Rectangle: ", length * breadth);
  };
}

// Calling
// new -> empty object
let AreaOfRectangle = new Rectangle(2, 5);
console.log(AreaOfRectangle.Area());
