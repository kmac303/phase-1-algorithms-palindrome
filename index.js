function isPalindrome(word) {
  var length = word.length;
  for (var i = 0; i < length/2; i++) {
    if (word[i] !== word[length - 1 - i]) {
        return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
checks if the first letter of "word" matches the last letter
repeats for every letter afterwards, moving forward from the front and backward from the back
  Add written explanation of your solution here
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
