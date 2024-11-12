// Получаем элементы дисплея и кнопок
const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

// Начальные значения
let currentValue = '0'; // Текущее значение на экране
let previousValue = null; // Предыдущее значение
let operator = null; // Оператор, который будет применён

// Обработка кликов на кнопки
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

// Функция для добавления числа
function appendNumber(number) {
  if (currentValue === '0' || currentValue === 'Error') {
    currentValue = number;
  } else {
    currentValue += number;
  }
}

// Функция для установки оператора
function setOperator(op) {
  // Если мы уже выбрали оператор, заменим его новым
  if (operator) {
    operator = op; // Меняем оператор на новый
  } else {
    // Если это первый оператор, сохраняем текущее значение в previousValue
    previousValue = currentValue;
    currentValue = ''; // Очищаем экран для следующего числа
  }
  operator = op; // Устанавливаем новый оператор
}

// Функция для вычислений
function calculate() 
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
    operator = null; // Сбрасываем оператор после вычислений
    previousValue = null; // Сбрасываем предыдущее значение
  }
}

// Очистка дисплея
function clear() 
  currentValue = '0';
  previousValue = null;
  operator = null;
}

// Обновление дисплея
function updateDisplay() {
  display.innerText = currentValue || '0';
}