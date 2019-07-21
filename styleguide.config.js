const webpackConfig = require('./webpack.styleguide.js');

module.exports = {
  title: 'AC Design',
  components: [
    'src/**/[A-Z]*.jsx',
    'templates/**/[A-Z]*.jsx',
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
      baseBackground: '#fdfdfc',
      link: '#274e75',
      linkHover: '#90a7bf',
      border: '#e0d2de',
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
};
