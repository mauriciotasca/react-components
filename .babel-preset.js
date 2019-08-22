const { NODE_ENV } = process.env;
const isESBuild = NODE_ENV === 'build-es';

const presets = [
  "@babel/preset-react",
  [
    "@babel/env",
    {
      modules: isESBuild ? false : 'commonjs',
    }
  ],
  "@babel/preset-flow"
];
const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-export-default-from",
  "@babel/transform-runtime"
];

module.exports = () => ({
  compact: false,
  presets,
  plugins,
});
