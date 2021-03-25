function polyfillEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback.call(this, array[i], i, array)) {
      return false;
    }
  }
  return true;
}
module.exports = polyfillEvery;
