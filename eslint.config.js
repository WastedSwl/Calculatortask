// eslint.config.js
import js from '@eslint/js';  // Импортируем базовые правила ESLint
import prettier from 'eslint-plugin-prettier';  // Импортируем плагин prettier

export default [
  {
    files: ['src/*.js'],  // Применяется только к файлам в папке src
    languageOptions: {
      ecmaVersion: 2021,  // Используем ES2021
      sourceType: 'module',  // Указываем, что используем модули
      globals: {
        document: 'readonly',  // Для поддержки переменных браузера
        window: 'readonly',
      },
    },
    plugins: {
      prettier,  // Указываем плагин как объект
    },
    rules: {
      'prettier/prettier': 'error',  // Ошибки по правилам prettier
      'no-unused-vars': 'error',  // Ошибки на неиспользуемые переменные
      'no-console': 'error',  // Ошибки на использование console
    },
  },
];
