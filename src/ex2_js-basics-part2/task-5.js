function maxElement(array) {
  let maxElement = 0;
  for (let i = 0; i < array.length; i++) {
    if (maxElement < array[i]) {
      maxElement = array[i];
    }
  }
  return maxElement;
}
module.exports = maxElement;
