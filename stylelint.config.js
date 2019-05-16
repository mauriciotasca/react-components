module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-prettier',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-twbs-bootstrap/scss',
    'stylelint-config-prettier',
  ],
  rules: {
    'prettier/prettier': true,
  },
};
