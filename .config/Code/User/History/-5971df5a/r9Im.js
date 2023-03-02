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
function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    object[key]= value;
    return object;
    }

function deleteFromEmployeeByKey(object,key,value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey()