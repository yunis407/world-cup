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

  //fareTripler
  const fareTripler = createFareMultiplier(3);
  
