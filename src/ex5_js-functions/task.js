function createCalculator() {
  let result = 0;
  return {
    //+++++add+++++
    add: function add(value) {
      if (isNaN(value)) {
        return add;
      }
      result += value;
      return add;
    },
    //-----subtract---—
    subtract: function subtract(value) {
      if (isNaN(value)) {
        return subtract;
      }
      result -= value;
      return subtract;
    },
    //*****multiply******
    multiply: function multiply(value) {
      if (isNaN(value)) {
        return multiply;
      }
      result *= value;
      return multiply;
    },
    //:::::divide:::::
    divide: function divide(value) {
      if (isNaN(value) || value === 0 || value === Infinity) {
        return divide;
      }
      result /= value;
      return divide;
    },
    //.....getResult.....
    getResult: function () {
      return result;
    },
    //.....reset.....
    reset: function () {
      result = 0;
      return result;
    },
  };
}
const Calculator = createCalculator();
module.exports = Calculator;
