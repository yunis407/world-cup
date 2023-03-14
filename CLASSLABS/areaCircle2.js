// a = pi * r ^ 2.
const PI = 3.14159;
//Primitive: number, string, boolean, null, undefined, symbol
//Object: function, array, date.
//Normal function, arrow function

// const areaCircle = function (radius){
//   return PI * radius ** 2;
// }

const areaCircle = (radius) => PI * radius ** 2;

console.log("The area of the circle is: ", areaCircle(5));

//Takes a radius of a circle and returns its area.
//areaCircle (radius: number, PI: number): number.
// function areaCircle(radius){
//   return PI * radius ** 2;
// }
