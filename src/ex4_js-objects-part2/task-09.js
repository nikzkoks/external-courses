function putStringToString(sourceString, string, place) {
  let newString = sourceString.split(" ");
  newString.splice(place + 1, 0, string);
  return newString.join(" ");
}
module.exports = putStringToString;
