function hasTargetSum(array, target) {
  // Write your algorithm here
  let obj = {}
  let diff;

  for (let i = 0; i < array.length; i++) {
    diff = target - array[i]

    if (obj[diff]) {
      return true
    } else {
      obj[array[i]] = true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  declare an empty object.
declare diff variable.
use for loop to iterate through the numbers.
if the difference between the target and any of the numbers is present in the array return true. Otherwise return false.
*/

/*
  Add written explanation of your solution here
  iterates over thenumbers and checks if the difference of target and the number is present in the array..
  if so it returns true and if not it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;