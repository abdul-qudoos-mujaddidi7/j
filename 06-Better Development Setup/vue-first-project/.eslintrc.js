module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential', // If you're using Vue 3
      'eslint:recommended',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
      requireConfigFile: false, // Looks for babel.config.js
    },
    rules: {
      // Customize your ESLint rules here
    },
  };
  