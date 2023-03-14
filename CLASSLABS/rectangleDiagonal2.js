//c^2 = a^2 + b^2
//c = Math.sqrt(a^2 + b^2)

const rectangleDiagonal = (length, width) => Math.sqrt(length * length + width * width);

console.log("The diagonal is: ", rectangleDiagonal(6, 9));

// function rectangleDiagonal(length, width){
//   let diagonal = Math.sqrt(length * length + width * width);
//   return diagonal;
// }