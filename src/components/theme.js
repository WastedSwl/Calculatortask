export function initializeThemeSwitcher() {
  const themeButton = document.getElementById('theme-button');
  const themeMenu = document.getElementById('theme-menu');
  const randomOption = document.querySelector('.theme-option[data-theme="random"]');
  
  // Инициализация темы при загрузке
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'random';
    applyRandomTheme(savedTheme);
  });
  
  // Показывать/скрывать меню
  themeButton.addEventListener('click', () => {
    themeMenu.classList.toggle('hidden');
    themeMenu.classList.toggle('visible');
  });
  
  // Смена на рандомную тему
  randomOption.addEventListener('click', () => {
    applyRandomTheme('random');
  });
  
  function applyRandomTheme(theme) {
    if (theme === 'random') {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.body.style.backgroundColor = randomColor;
  
 
      localStorage.setItem('theme', theme);
      localStorage.setItem('randomColor', randomColor);
    }
  

    themeMenu.classList.remove('visible');
    themeMenu.classList.add('hidden');
  }
}