module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    '@react-native-community',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  rules: {
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': ['error'],
    'react/sort-prop-types': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
