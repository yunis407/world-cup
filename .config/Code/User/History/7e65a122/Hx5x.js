//returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){return drivers.slice(0,2)}

//returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){return drivers.slice(-2)}

//selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers[0];
  
//Fare Multiplier
function createFareMultiplier(interger){
    function multiply(value){
        return value*interger;
    }
    return multiply;
}

//fareDoubler
function fareDoubler(interger){
    return interger*2;
}

//fareTripler
function fareTripler(interger){
    return interger*3;
}

//selectDifferentDrivers
function selectDifferentDrivers(arrayOfDrivers, fxn) {
    return fxn(arrayOfDrivers);
  }
