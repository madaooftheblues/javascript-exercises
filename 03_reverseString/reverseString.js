const reverseString = function (string) {
  let strArray = Array.from(string);
  let reversed = [];
  let j = 0;
  for (let i = strArray.length; i >= 0; i--) {
    reversed[j] = strArray[i];
    j++;
  }
  return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
