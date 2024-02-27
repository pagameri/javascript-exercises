const findTheOldest = function (array) {
  let years = array.map((person) => {
    if (person.yearOfDeath === undefined) {
      return new Date().getFullYear() - person.yearOfBirth;
    }
    return person.yearOfDeath - person.yearOfBirth;
  });
  let oldest = years.reduce((a, b) => Math.max(a, b));
  let oldestIndex = years.findIndex((age) => age === oldest);
  return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
