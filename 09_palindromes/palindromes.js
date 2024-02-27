// const palindromes = function (string) {
//   let bareString = stripString(string).join('');
//   let reversedString = stripString(string).reverse().join('');

//   return reversedString == bareString;
// };

// function stripString(string) {
//   return string
//     .toLowerCase()
//     .split('')
//     .filter((char) => /[a-z0-9]/.test(char));
// }

const palindromes = function (string) {
  let bareString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return bareString.split('').reverse().join('') == bareString;
};
// Do not edit below this line
module.exports = palindromes;
