// Your code here
// Your code here
function createEmployeeRecord(arr) {
    const employee = {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    return employee;
  };
  function createEmployeeRecords(arr){
    const createEmployeeRecords = arr.map(employeeData=>createEmployeeRecord(employeeData));
    return createEmployeeRecords;
  };

  
  let createTimeInEvent = function (employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
  
    employee.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
    });
  
    return employee;
  };
  let createTimeOutEvent = function (employee, dateStamp) {
    let [date, hour] = dateStamp.split(" ");
  
    employee.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
    });
  
    return employee;
  };
  
  let hoursWorkedOnDate = function (employee, findDate) {
    let inEvent = employee.timeInEvents.find(function (event) {
      return event.date === findDate;
    });
  
    let outEvent = employee.timeOutEvents.find(function (inEvent) {
      return inEvent.date === appropriateDate;
    });
  
    return (outEvent.hour - inEvent.hour) / 100;
  };
  
  let wagesEarnedOnDate = function (employee,findDate) {
    let rawSalary = hoursWorkedOnDate(employee, findDate) * employee.payPerHour;
    return parseFloat(rawSalary.toString());
  };
  
  
  let allWagesFor = function appropriateDate(employee) {
    let entitledDates = employee.timeInEvents.map(function (event) {
      return event.date;
    });
  
    let payables = entitledDates.reduce(function (memo, day) {
      return memo + wagesEarnedOnDate(employee, day);
    }, 0);
  
    return payables;
  };
  
  let findEmployeeByFirstName = function (arr, firstName) {
    return arr.find(function (record) {
      return record.firstName === firstName;
    });
  };
  
  let calculatePayroll = function (arrayOfEmployeeRecords) {
    return arrayOfEmployeeRecords.reduce(function (memo, record) {
      return memo + allWagesFor(record);
    }, 0);
  };
