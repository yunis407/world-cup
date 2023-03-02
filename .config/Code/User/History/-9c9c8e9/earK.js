// Write your solution in this file!
var customerName = 'bob';

//change name to uppercase
function upperCaseCustomerName(){
  return customerName = customerName.toUpperCase();
}

//declaring in global scope
function setBestCustomer(){
    return bestCustomer = 'not bob'
}

//overWriting
function overwriteBestCustomer(customerName){
    return bestCustomer = customerName;
}

const leastFavoriteCustomer = 'Andy';

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'Ben';
}