function addValueInObject(string, object) {
  let objectMod = Object.assign({}, object);
  for (let key in object) {
    if (string === key && object.hasOwnProperty(key)) {
      return true;
    }
  }
  objectMod[string] = "new";
  Object.assign(object, objectMod);
  return object;
}
module.exports = addValueInObject;
