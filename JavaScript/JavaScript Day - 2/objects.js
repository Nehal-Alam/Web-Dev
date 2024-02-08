// Creating Object in javascript

let rectangle = {
  length: 3,
  width: 2,
  areaRectangle() {
    console.log("Area of Rectangle is ", this.length * this.width);
  },
};

console.log(rectangle.length);
console.log(rectangle.width);
console.log(rectangle.areaRectangle());

// Crate Object inside the function

// Function
function createRectangle() {
  // Object
  return (rectangle = {
    length: 2,
    width: 3,
    // Function inside the  object
    draw() {
      console.log("Creating Rectangle");
    },
  });
  // return rectangle to print or display outside the function when  call the function.
  //   return rectangle;
}

let printRectangle = createRectangle();
console.log(createRectangle());
