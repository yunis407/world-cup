const assert = require ("assert");


const checkSheepArray = (sheepArrayParameter) => {
  for (let index = 0 ; index < sheepArrayParameter.length ; ++index){
    assert(typeof sheepArrayParameter[index] === "boolean", 
    "Unexpected value at index " + `${index}` +
    "\nSheep array must contain boolean elements only");
  }
}


let sheepArray = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];



checkSheepArray(sheepArray);
console.log("The number of sheep are: ", countSheep(sheepArray));




function countSheep(sheepArrayParameter){
  let count = 0;


  for (let index = 0 ; index < sheepArrayParameter.length ; ++index){
    if (sheepArrayParameter[index] === true) ++count;
  }

  return count;
}