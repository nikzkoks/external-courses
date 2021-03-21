function searchPropertyInObject(nameProperty, object) {
  if (object.__proto__) {
    return object.__proto__[nameProperty];
  }
  return undefined;
}
module.exports = searchPropertyInObject;
