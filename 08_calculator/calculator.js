const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((result, number) => {
    result *= number;
    return result;
  });
};

const power = function (a, b) {
  // let total;
  // for (let i = 0; i < b; i++) {
  //   if (i === 0) {
  //     total = a;
  //   } else {
  //     total *= a;
  //   }
  // }
  // return total;
  return Math.pow(a, b);
};

const factorial = function (number) {
  let factorial = 1;
  for (let i = 0; i < number; i++) {
    factorial *= number - i;
  }
  return factorial;
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
