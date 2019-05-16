module.exports = {
  linters: {
    '**/*.{js,jsx}': ['npm run eslint:fix:staged --', 'git add'],
    '**/*.{css,scss}': ['npm run stylelint:fix:staged --', 'git add'],
  },
  ignore: [
    '**/dist/*',
  ],
};
