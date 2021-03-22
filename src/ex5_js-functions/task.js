function createCalculator() {
  let result = 0;
  return {
    add: function add(value) {
      if (isNaN(value)) {
        return add;
      }
      result += value;
      return add;
    },
    subtract: function subtract(value) {
      if (isNaN(value)) {
        return subtract;
      }
      result -= value;
      return subtract;
    },
    multiply: function multiply(value) {
      if (isNaN(value)) {
        return multiply;
      }
      result *= value;
      return multiply;
    },
    divide: function divide(value) {
      if (isNaN(value)) {
        return divide;
      }
      result /= value;
      return divide;
    },
    getResult: function () {
      return result;
    },
    reset: function () {
      result = 0;
      return result;
    },
  };
}
const Calculator = createCalculator();
module.exports = Calculator;
