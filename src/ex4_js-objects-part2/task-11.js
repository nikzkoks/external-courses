function calcEveryChar(string) {
  let arrayCounter = {};
  for (let i = 0; i < string.length; i++) {
    let counter = string[i];
    if (!arrayCounter[counter]) {
      arrayCounter[counter] = 0;
    }
    arrayCounter[counter]++;
  }
  for (let key in arrayCounter) {
    if (arrayCounter.hasOwnProperty(key)) {
      console.log(key + " " + arrayCounter[key]);
    }
  }
  return;
}
module.exports = calcEveryChar;
