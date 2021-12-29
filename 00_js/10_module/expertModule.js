let calc = {};

calc.add = function (a, b) {
  return a + b;
};
calc.subtract = function (a, b) {
  return a > b ? a - b : b - a;
};
module.experts = calc;
