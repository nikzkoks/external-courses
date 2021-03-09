function isValueInObject(string, object) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (string === key) {
        return true;
      }
    }
  }
  return false;
}
module.exports = isValueInObject;
