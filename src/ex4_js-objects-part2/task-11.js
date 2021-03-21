function calcEveryChar(string) {
  let arrayCounter = {};
  for (let i = 0; i < string.length; i++) {
    let counter = string[i];
    if (!arrayCounter[counter]) {
      arrayCounter[counter] = 0;
    }
    arrayCounter[counter] += 1;
  }
  for (let key in arrayCounter) {
    if (arrayCounter.hasOwnProperty(key)) {
      console.log(`${Object.entries(arrayCounter)}`);
    }
  }
  return;
}
module.exports = calcEveryChar;
