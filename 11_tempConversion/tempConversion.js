const convertToCelsius = function(val) {
  let c = (val-32) * (5/9);
  return Math.round(c * 10) / 10;
};

const convertToFahrenheit = function(val) {
  let f = val * (9/5) + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
