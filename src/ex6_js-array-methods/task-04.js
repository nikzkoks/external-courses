function polyfillFilter(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback.call(this, array[i], i, array)) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
module.exports = polyfillFilter;
