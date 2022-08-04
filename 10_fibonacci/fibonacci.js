const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  function fibIter(a, b, count) {
    return count > n ? a : fibIter(b, a + b, count + 1);
  }

  return fibIter(0, 1, 1);
};

// Do not edit below this line
module.exports = fibonacci;
