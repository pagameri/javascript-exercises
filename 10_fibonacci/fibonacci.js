const fibonacci = function (nth) {
  nth = +nth;
  if (nth === 0) {
    return 0;
  }
  if (nth < 0) {
    return 'OOPS';
  }
  let last = 1;
  let lastBefore = 0;

  for (let i = 2; i <= nth; i++) {
    let sum = last + lastBefore;
    lastBefore = last;
    last = sum;
  }
  return last;
};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= nth; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

// Do not edit below this line
module.exports = fibonacci;
