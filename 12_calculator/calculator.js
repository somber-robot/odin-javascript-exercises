const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
    return arr.reduce((prod, current) => prod * current, 1);
};

const power = function(a, b) {
    return a**b;
};

const factorial = function(num) {
    if (num === 0) return 1;
    let fact = 1;
    for (i = 2; i <= num; i++) fact *= i;
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
