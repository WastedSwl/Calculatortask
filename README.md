1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Build the app: `npm run build`
4. Start the app: `npm start`

Folder structure:

- `.husky/` - Contains git hooks for automating actions like linting before commits.
- `node_modules/` - Auto-generated folder containing installed npm dependencies.
- `public/` - Stores static files like `index.html`.
- `src/` - The main source code of the app:
  - `index.js` - Entry point for the application.
  - `components/` - Contains reusable UI components.
  - `styles/` - CSS files.
- `.babelrc` - Configuration for Babel.
- `.gitignore` - Specifies untracked files for Git.
- `.prettierrc` - Configures Prettier for code formatting.
- `eslint.config.js` - Sets up ESLint for code quality and error checking.
- `package.json` - Contains metadata, dependencies, and scripts for the project.
- `package-lock.json` - Specifies the exact versions of installed dependencies.
- `webpack.config.js` - Configuration for Webpack.