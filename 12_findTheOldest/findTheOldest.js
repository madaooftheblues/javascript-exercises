const findTheOldest = function (array) {
  const oldSort = array.sort((a, b) => {
    const ageA = a.yearOfDeath
      ? a.yearOfDeath - a.yearOfBirth
      : new Date().getFullYear() - a.yearOfBirth;

    const ageB = b.yearOfDeath
      ? b.yearOfDeath - b.yearOfBirth
      : new Date().getFullYear() - b.yearOfBirth;

    return ageB - ageA;
  });

  return oldSort[0];
};

// Do not edit below this line
module.exports = findTheOldest;
