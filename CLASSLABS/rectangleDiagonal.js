let diagonal = rectangleDiagonalNormal(4, 5);
console.log("The diagonal is ", diagonal);

//Normal function
//Takes the length and the width of a rectangle and returns its diagonal.
function rectangleDiagonalNormal (length, width){
  let diagonal = Math.sqrt((length * length) + (width * width));
  return diagonal;
}

//Arrow function
//Takes the length and the width of a rectangle and returns its diagonal.
const rectangleDiagonalArrow = (length, width) => Math.sqrt((length * length) + (width * width)); 