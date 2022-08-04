const palindromes = function (string) {
  const alphaNumeric = string.toLowerCase().replace(/[^a-z\d]/g, "");

  return [...alphaNumeric].reverse().join("") === alphaNumeric;
};

// Do not edit below this line
module.exports = palindromes;
