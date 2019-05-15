module.exports = {
  linters: {
    '**/*.{js,jsx}': ['npm run pretest --', 'git add'],
  },
  ignore: ['**/dist/*.min.js'],
};
