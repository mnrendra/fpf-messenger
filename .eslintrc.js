module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  rules: {
    'max-len': ['error', { code: 80 }],
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
