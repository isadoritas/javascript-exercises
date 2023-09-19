const add = function(a ,b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};
	

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function() {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
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
