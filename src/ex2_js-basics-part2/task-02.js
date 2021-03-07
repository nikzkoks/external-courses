function checkArray(array) {
  array.forEach(function (element, index) {
    console.log(index + ". " + element);
  });
  console.log("All elements: " + array.length);
  return;
}
module.exports = checkArray;
