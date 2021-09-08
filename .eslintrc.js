module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-native/no-inline-styles': 0,
  },
};
