//isNaN : is not a number. It returns true when 
//its argument is NaN and returns false when
//its argument is a number.

//NaN: is a number, it is an invalid number,  not a number: string, boolean, symbol, null

let myNumber = "Yunis has a good idea";

//console.log(typeof myNumber);
console.log(isReallyNaN(myNumber));


function isReallyNaN (parameter){
  if (typeof parameter === "number" && isNaN(parameter))
    return true;

  return false;
}