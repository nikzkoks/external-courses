function polyfillReduce(array, callback, initialValue) {
  let previousValue;
  let i = 0;

  if (!isNaN(initialValue)) {
    previousValue = initialValue;
  } else {
    i = 1;
    previousValue = array[0];
  }

  for (; i < array.length; i++) {
    if (i in array) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }

  return previousValue;
}

module.exports = polyfillReduce;
