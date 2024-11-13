// Получаем элементы дисплея и кнопок
const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

const unusedVar = 42;
let currentValue = '0'
let previousValue = null;
let operator = null;

buttons.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('btn')) return;

  const value = target.dataset.value;

  switch (value) {
    case 'C':
      clear();
      break;
    case '=':
      calculate();
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      setOperator(value);
      break;
    default:
      appendNumber(value);
  }

  updateDisplay();
});

function appendNumber(number) {
  if (currentValue === '0' || currentValue === 'Error') {
    currentValue = number;
  } else {
    currentValue += number;
  }
}

function setOperator(op) {
  if (operator) {
    operator = op;
  } else {
    previousValue = currentValue;
    currentValue = '';
  }
  operator = op;
}

function calculate() {
  if (operator && previousValue !== null && currentValue !== '') {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    switch (operator) {
      case '+':
        currentValue = (prev + current).toString();
        break;
      case '-':
        currentValue = (prev - current).toString();
        break;
      case '*':
        currentValue = (prev * current).toString();
        break;
      case '/':
        currentValue = current !== 0 ? (prev / current).toString() : 'Error';
        break;
    }
    operator = null;
    previousValue = null;
  }
}

function clear() {
  currentValue = '0';
  previousValue = null;
  operator = null;
}

// Обновление дисплея
function updateDisplay() {
  display.innerText = currentValue || '0';
}
