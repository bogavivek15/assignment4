function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Error: cant divided by zero.";
  }
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function calculate(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    case "^":
      result = Math.pow(a, b);
      break;  
    default:
      return "operator invalid";
  }
  return typeof result== 'number' ? result.toFixed(2) : result;
}

console.log(calculate(5, 2, "^"));
