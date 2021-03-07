function whatInArray(array) {
  let evenElements = 0,
    oddElements = 0,
    zeroElements = 0;
  array.forEach((element) => {
    if (element === 0 || null) {
      ++zeroElements;
    } else if (element % 2) {
      ++oddElements;
    } else {
      ++evenElements;
    }
  });
  return [evenElements, oddElements, zeroElements];
}
module.exports = whatInArray;
