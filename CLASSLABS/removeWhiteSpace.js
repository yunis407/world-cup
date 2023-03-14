//object types: array, function, date, regex, object
const regex = /\s+/g;
const replacement = "";


let stringArgument = "   Hi there my names is Amos    ";


console.log(removeWhiteSpace(stringArgument));

function removeWhiteSpace(stringParamater){
  return stringParamater.replace(regex, replacement);
}
