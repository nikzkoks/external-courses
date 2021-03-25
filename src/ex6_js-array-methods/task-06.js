function polyfillReduce(array, callback, initialValue = 0) {
  let previousValue = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }
  return previousValue;
}
module.exports = polyfillReduce;
