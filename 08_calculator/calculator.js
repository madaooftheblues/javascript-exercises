const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function (array) {
  return array.reduce((mul, item) => mul * item, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (n) {
  function fact(n, count) {
    return n == 0 ? count : fact(n - 1, count * n);
  }
  return fact(n, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
