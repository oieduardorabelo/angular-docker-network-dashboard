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
  extends: ['airbnb'],
  globals: {
    angular: true,
    inject: true,
  }
};
