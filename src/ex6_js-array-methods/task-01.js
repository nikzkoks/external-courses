function polyfillSlice(array, begin = 0, end = array.length) {
  let newArray = [];
  if (begin < 0 && end >= 0) {
    for (
      let i = array.length + begin, j = 0;
      i < end && i < array.length;
      i++, j++
    ) {
      newArray[j] = array[i];
    }
    return newArray;
  }
  if (begin < 0 && end < 0) {
    for (
      let i = array.length + begin, j = 0;
      i < array.length + end && i < array.length;
      i++, j++
    ) {
      newArray[j] = array[i];
    }
    return newArray;
  }
  if (begin >= 0 && end < 0) {
    for (
      let i = begin, j = 0;
      i < array.length + end && i < array.length;
      i++, j++
    ) {
      newArray[j] = array[i];
    }
    return newArray;
  }
  for (let i = begin, j = 0; i < end && i < array.length; i++, j++) {
    newArray[j] = array[i];
  }
  return newArray;
}
module.exports = polyfillSlice;
