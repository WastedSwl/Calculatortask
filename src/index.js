import './Styles/styles.css'; // Подключение стилей, если они отдельным файлом
import { initializeCalculator } from './components/calculator.js';
import { initializeThemeSwitcher } from './components/theme.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeCalculator();
  initializeThemeSwitcher();
});