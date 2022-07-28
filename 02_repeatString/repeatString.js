const repeatString = function (string, n) {
  if (n < 0) return "ERROR";

  let str = string;
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
