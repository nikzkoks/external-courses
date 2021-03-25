function polyfillMap(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[newArray.length] = callback.call(this, array[i], i, array);
  }
  return newArray;
}
module.exports = polyfillMap;
