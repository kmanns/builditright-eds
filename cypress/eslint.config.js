let cypress = { configs: { recommended: {} } };
let hasCypressPlugin = false;

try {
  // eslint-plugin-cypress@5 exposes a flat config entrypoint.
  cypress = require('eslint-plugin-cypress/flat');
  hasCypressPlugin = true;
} catch {
  // Fallback for offline/partial installs so local lint can still run.
  cypress = { configs: { recommended: {} } };
}

module.exports = [
  cypress.configs.recommended,
  {
    files: ['**/*.js'],
    rules: hasCypressPlugin ? {
      'cypress/unsafe-to-chain-command': 'warn',
      'cypress/no-unnecessary-waiting': 'warn',
      'cypress/no-assigning-return-values': 'warn',
    } : {},
  },
];
