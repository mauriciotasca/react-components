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
    'import/no-dynamic-require': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-one-expression-per-line': 'off',
  },
};
