module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.scss',
      options: { parser: 'scss' },
    },
  ],
};
