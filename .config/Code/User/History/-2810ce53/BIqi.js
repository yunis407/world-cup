// Import Prompt-sync function
const sd = require("prompt-sync");
const prompt = sd();

function speedDetector(){
    // Ask user for input
    let speed = prompt("What is the speed? ");
    // Check the speed status and print the preferred message
    if (speed >= 0 && speed <=70) {
        console.log("Ok");
    }else if(speed > 70 && speed <= 130){
        let demeritPoint = (speed - 70) / 5;
        console.log(`Points: ${demeritPoint}`);
    }else if(speed > 130){
        console.log("License suspended");
    }else{
        console.log("Enter the correct speed")
    }
}
speedDetector();