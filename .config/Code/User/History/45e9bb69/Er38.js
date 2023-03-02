function isPalindrome(word) {
  // Write your algorithm here

  let newWord =word.split("").reverse().join("");
  if (word == newWord) {
    return true;
  } else if (word != newWord) {
    return false;
  }
}

/* 
  Add your pseudocode here
  
  declare a newWord variable,split it to substrings,reverse them and join them to form a string.
  if the word is the same as the newWord return true else return false
*/

/*
  Add written explanation of your solution here
  The word is split into substrings ,the substrings are reversed and then joined to form a complete string.
  if the word is the same as the newWord its a palindrome hence returns true else if it's not a palindrome it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;