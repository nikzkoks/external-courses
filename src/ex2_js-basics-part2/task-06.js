function primeNumber(number) {
  let count = 0;
  if (number > 1000) {
    return "Данные неверны";
  } else if (number <= 1) {
    return "Это число - " + number;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      ++count;
      break;
    }
  }
  if (count) {
    return "Число " + number + " - составное число";
  }
  return "Число " + number + " - простое число";
}
module.exports = primeNumber;
