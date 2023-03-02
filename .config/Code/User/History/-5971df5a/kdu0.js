// Write your solution in this file!
const employee = {
    name: "Sumaya",
    streetAdress: "Burhan",
}
function updateEmployeeWithKeyAndValue(object,key,value){
    return{
        ...object,
        [key]: value,
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue()