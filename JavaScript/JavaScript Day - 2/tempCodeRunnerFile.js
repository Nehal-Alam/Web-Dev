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
