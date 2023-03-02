// Write your solution in this file!
const employee = {
    name : "Flata",
    streetAddress : "Pangani",
}

function updateEmployeeWithKeyAndValue(){
    return {...employee,
        ["name"]: "Sam", 
        ["streetAddress"] : "11 Broadway",
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee["streetAddress"] = "12 Broadway";

    return employee;
}

function deleteFromEmployeeByKey(){
    const newEmployee = {...employee};
    newEmployee["name"] = "Sam";
    delete newEmployee.name;
    return newEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}