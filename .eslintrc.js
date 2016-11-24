module.exports = {
  root: true,
  parseOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    jasmine: true,
  },
  extends: ['airbnb'],
};
