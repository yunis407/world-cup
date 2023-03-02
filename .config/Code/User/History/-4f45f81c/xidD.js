//My first javascript code!
console.log('HELLO SUMAYA');
let person ={
    name:"SUMAYA",
    age:17
};
//dot notation
person.name="macan badan"
//bracket notation
let selection='name';
person[selection] = 'qabi';

console.log(person.name);

let selectedColors=['red','blue'];
selectedColors[2]='1';
console.log(selectedColors.length);

//performing a task
function sumaya(name, lastName) {
    console.log('hello ' + name + '' + lastName);
}sumaya('yonkaal','nunaai');

//calculate a value
function boqorateda(number) {
    return number*number;
}

console.log(boqorateda(8))

let basicSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overtime,rate)



