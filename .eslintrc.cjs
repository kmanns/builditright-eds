module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  plugins: ['import'],
  ignorePatterns: [
    'node_modules/',
    'scripts/__dropins__/',
    'scripts/acdl/',
    'scripts/commerce-events-collector.js',
    'scripts/commerce-events-sdk.js',
    'tools/**',
    'cypress/**',
    'drafts/**',
    'docs/**',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
  },
};
