//returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }

  //returnLastTwoDrivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }

  //selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  //createFareMultiplie
  function createFareMultiplier(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  //fareDoubler
  const fareDoubler = createFareMultiplier(2);

  
  fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.