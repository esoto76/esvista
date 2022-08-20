const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    semi: [2, 'always'],
    'no-unused-vars': ['error'],
    'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],
    ignoreParameters: true,
    ignoreProperties: true
  }
}
