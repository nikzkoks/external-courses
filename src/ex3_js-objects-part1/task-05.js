function cloneObject(object) {
  let copyObject = {};
  Object.assign(copyObject, object);
  return copyObject;
}
module.exports = cloneObject;
