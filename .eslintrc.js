module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['prettier', 'react', '@typescript-eslint', 'unused-imports'],
  extends: ['prettier', 'react-app', 'plugin:react/recommended'],
  rules: {
    'prettier/prettier': ['warn'],
    'unused-imports/no-unused-imports': ['warn'],
  },
};
