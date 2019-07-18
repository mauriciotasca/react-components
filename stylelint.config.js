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
    // Allow BEM class patterns
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },
};
