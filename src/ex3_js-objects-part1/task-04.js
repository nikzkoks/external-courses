function addValueInObject(string, object) {
  let objectMod = object;
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (string === key) {
        return true;
      }
    }
  }
  objectMod[string] = "new";
  return objectMod;
}
module.exports = addValueInObject;
