function removeSpaces(string) {
  let newString = string;
  if (string[0] === ' ') {
    newString = string.slice(1);
  }
  if (string[string.length - 1] === ' ') {
    newString = newString.slice(0, -1);
  }
  return newString;
}
module.exports = removeSpaces;
