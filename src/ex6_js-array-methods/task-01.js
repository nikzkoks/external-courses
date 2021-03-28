function polyfillSlice(array, begin, end) {
  const newArray = [];
  let beginArray = begin ? begin : 0;
  let sizeArray = array.length;
  let endArray = end ? end : array.length;

  if (!begin) {
    beginArray = 0;
  } else {
    beginArray = begin < 0 ? sizeArray + begin : beginArray;
  }

  beginArray = begin + sizeArray < 0 ? 0 : beginArray;

  if (end < 0) {
    endArray = sizeArray + end;
  }

  sizeArray = endArray - beginArray;

  for (let i = 0; i < sizeArray; i++) {
    newArray[i] = array[beginArray + i];
  }

  return newArray;
}

module.exports = polyfillSlice;
