// Import Prompt-sync function
const ns = require('prompt-sync');
const prompt = ns();

// Prompt user for input
let salary = prompt("Enter your Salary:");

// Function to evaluate amount of tax to be paid
function taxRate(){
    if(salary <= 24000){
        return (salary / 100) * 10;
    }else if(salary > 24000 && salary <= 32333){ 
        return (salary / 100) * 25;
    }else{
        return (salary / 100) * 30;
    }
}
let tax = taxRate();

// Function to evaluate NHIF fee
function healthService(){
    if(salary < 100000){
        return salary * (1 / 1000);
    }else{
        return 1700;
    } 
}
let NHIF = healthService();

// Function to evaluate NSSF fee
function SocialSecurity(){
    if(salary <= 100000){
        return salary * (6 / 100);
    }else{
        return 6000;
    }
}
let NSSF = SocialSecurity();

// Finding the Net Salary
let netSalary = salary - (tax + NSSF + NHIF);

//Printing out the required outputs
console.log(`Gross Salary: Ksh.${salary}`);
console.log(`Tax: Ksh.${tax}`);
console.log(`NHIF Deductions: Ksh.${NHIF}`);
console.log(`NSSF Deductions: Ksh.${NSSF}`);
console.log(`Net Salary: Ksh.${netSalary}`);