//Arrow function
//Function that takes a parameter and checks whether it is NaN 
const isReallyNaNArrow = (parameter) => (typeof parameter === 'number') ? false : true;

let undefinedVariable;

//console.log("Parameter's value is NaN (Normal function): ", isNaN(undefinedVariable));
console.log("Parameter's value is NaN (Normal function): ", isReallyNaNNormal(undefinedVariable));
console.log("Parameter's value is NaN (Arrow function): ", isReallyNaNArrow(undefinedVariable));

//Normal function
//isReallyNaNNormal (parameter: undefined): boolean.
function isReallyNaNNormal (parameter) {
  if (typeof parameter === 'number') return false;
  return true;
}