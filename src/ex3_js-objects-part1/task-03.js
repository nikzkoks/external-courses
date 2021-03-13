function isValueInObject(string, object) {
  for (let key in object) {
    if (string === key && object.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
}
module.exports = isValueInObject;
