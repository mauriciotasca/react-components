module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'airbnb'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: [
    'react',
    'jsx-a11y',
    'flowtype'
  ],
  overrides: [
    {
      'files': [ '**/*spec.js' ],
      'rules': {
        'react/jsx-filename-extension': 0
      }
    }
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 0,
    'comma-dangle': 'off',
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 'off',
  },
};
