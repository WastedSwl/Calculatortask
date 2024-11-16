export function initializeCalculator() {
  const display = document.getElementById('display');
  const buttons = document.getElementById('buttons');

  let currentValue = '0';
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
          case '+/-':
              toggleSign();
              break;
          case '%':
              applyPercentage();
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
          calculate(); 
      }
      previousValue = currentValue;
      currentValue = '0';
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

  function toggleSign() {
      if (currentValue === '0' || currentValue === 'Error') return;
      currentValue = (parseFloat(currentValue) * -1).toString();
  }

  function applyPercentage() {
      if (operator && previousValue !== null) {
          // Процент от предыдущего значения
          const prev = parseFloat(previousValue);
          currentValue = ((prev * parseFloat(currentValue)) / 100).toString();
      } else {
          // Процент от текущего значения
          currentValue = (parseFloat(currentValue) / 100).toString();
      }
  }

  function clear() {
      currentValue = '0';
      previousValue = null;
      operator = null;
  }

  function updateDisplay() {
      display.innerText = currentValue || '0';
  }
}