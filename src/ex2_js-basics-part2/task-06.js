function primeNumber(number) {
  let count = 0;
  if (number > 1000) {
    return console.log("Please input number <= 1000!");
  } else if (number <= 1) {
    return console.log("This number is " + number);
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      ++count;
      break;
    }
  }
  if (count) {
    return console.log("This is number not a prime!");
  }
  return console.log("This is number prime!");
}
module.exports = primeNumber;
