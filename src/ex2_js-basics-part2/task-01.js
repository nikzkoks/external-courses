function checkValue(checkValue) {
  if (
    isNaN(checkValue) ||
    checkValue === null ||
    typeof checkValue === "object"
  ) {
    return undefined;
  }
  if (typeof checkValue === "string" || "number") {
    return typeof checkValue;
  }
  return console.log("Error. Input number or string!");
}
module.exports = checkValue;
