//global variables.
// const scalingConstant = (9 / 5);
// const displacementConstant = 32;

//Arrow function
//Takes a temperature in degrees and returns the temperature in farenheit.
const degreesToFahrenheitArrow = (temperatureInDegrees) => (9 / 5 * temperatureInDegrees) + 32;

console.log("The conversion using a normal function is: ", degreesToFahrenheitNormal(20));
console.log("The conversion using an arrow function is: ", degreesToFahrenheitArrow(20));


//Normal function
//Takes a temperature in degrees and returns the temperature in farenheit.
//degreesToFahrenheitNormal (temperatureInDegrees: number) : number. 
function degreesToFahrenheitNormal (temperatureInDegrees) {
  let temperatureInFahrenheit = (9 / 5 * temperatureInDegrees) + 32;
  return temperatureInFahrenheit;
}