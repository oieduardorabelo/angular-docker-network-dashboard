module.exports = {
  root: true,
  parseOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    jasmine: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  globals: {
    angular: true,
    inject: true,
  },
  rules: {
    'prettier/prettier': [
      'error', {
        'trailingComma': 'es5',
        'singleQuote': true,
      }],
  },
};
