module.exports = {
  arrowParens: 'avoid',
  endOfLine: 'lf',
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.scss',
      options: { parser: 'scss' }
    }
  ]
};
