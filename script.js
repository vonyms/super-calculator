let result = '';
let operator = '';
let operand = '';

function clearResult() {
  result = '';
  operator = '';
  operand = '';
  document.getElementById('result').value = '';
}

function appendToResult(value) {
  result += value;
  document.getElementById('result').value = result;
}

function calculate(op) {
  if (op === '=') {
    if (result && operator && operand) {
      result = eval(operand + operator + result);
      operator = '';
      operand = '';
      document.getElementById('result').value = result;
    }
  } else if (op === '/' || op === '*' || op === '-' || op === '+') {
    if (result && !operator) {
      operator = op;
      operand = result;
      result = '';
    }
  }
}
