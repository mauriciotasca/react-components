const path = require('path');
const webpackConfig = require('./webpack.styleguide.js');

module.exports = {
  title: 'Components Library',
  version: '1.0.0',
  components: [
    'src/**/[A-Z]*.jsx',
    'templates/**/[A-Z]*.jsx',
    'examples/**/[A-Z]*.jsx',
  ],
  require: [
    './src/style.scss',
  ],
  defaultExample: true,
  showSidebar: true,
  usageMode: 'expand',
  exampleMode: 'expand',
  webpackConfig,
  theme: {
    color: {
      codeProperty: '#238661',
      codeString: '#37c18d',
      codeKeyword: '#0094ff',
      codeInserted: '#238661',
      codeFunction: '#ed003d',
      name: '#37c18d',
      type: '#ed003d',

      baseBackground: '#fafafa',
      sidebarBackground: '#232627',
      link: '#0094ff',
      linkHover: '#007bca',
      border: '#e0d2de'
    },
    fontFamily: {
      base: ['Overpass', 'Helvetica', 'sans-serif'],
    },
  },
  styles: {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
      },
    },
    Markdown: {
      pre: {
        border: 0,
        background: '#fdfdfc',
      },
      code: {
        fontSize: 14,
      },
    },
  },
  ignore: [
    '**/*.scratch/**',
    '**/*.spec.js',
  ],
  skipComponentsWithoutExample: true,
  // Override Styleguidist components
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'styleguide/LogoRenderer'),
    VersionRenderer: path.join(__dirname, 'styleguide/VersionRenderer'),
  },
  pagePerSection: true,
};
