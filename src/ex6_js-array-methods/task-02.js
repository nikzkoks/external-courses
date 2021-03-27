function polyfillSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback.call(this, array[i], i, array)) {
      return true;
    }
  }

  return false;
}

module.exports = polyfillSome;
