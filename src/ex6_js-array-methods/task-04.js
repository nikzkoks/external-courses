function polyfillFilter(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback.call(this, array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

module.exports = polyfillFilter;
