// Importing Prompt-sync fuction 
const gg = require("prompt-sync");
const prompt = gg();

function generator(){
    // Prompt Student for their marks
    let grade = prompt('Enter your percentage: ');

    // Evaluate the input and print the grade they got
    if(grade <= 100 && grade > 79){
        console.log("Your grade is A");
    }else if(grade <= 79 && grade > 59){
        console.log("Your grade is B");
    }else if(grade <= 59 && grade > 49){
        console.log("Your grade is C");
    }else if(grade <= 49 && grade > 39){
        console.log("Your grade is D");
    }else if(grade <= 39 && grade >=0){
        console.log("Your grade is E");
    }else{
        console.log("Enter correct percentage!")
    }
}
generator();