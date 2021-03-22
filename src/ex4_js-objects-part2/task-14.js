function randomRange(min, max) {
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
}
module.exports = randomRange;
