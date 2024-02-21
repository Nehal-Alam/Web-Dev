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
console.log(rectangle.areaRectangle);

// Crate Object inside the function

// Function
function createRectangle() {
  // Object
  return (rectangle = {
    length: 2,
    width: 3,
    // obejct inside the Function 
    draw() {
      console.log("Creating Rectangle");
    },
  });
  // return rectangle to print or display outside the function when  call the function.
  //   return rectangle;
}

let printRectangle = createRectangle();
console.log(createRectangle);

// Increament on value of Object using function
let a = {value : 10};
function ince(a){
  a.value++;
}
ince(a);
console.log(a);

// It will not Increamented  because JavaScript pass argument by Value and not by Reference so it's not changing original object but creating 
let a1 = 10;
function Increament(a1) {
  a1++;
}

Increament(a1);
console.log(a1)