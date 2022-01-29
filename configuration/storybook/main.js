/* eslint-disable no-param-reassign */
const path = require('path');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const stories = argv.gallery
  ? [path.resolve(__dirname, '../../gallery/**/*.story.@(ts|tsx)').replace(/\\/g, '/')]
  : [path.resolve(__dirname, '../../src/**/*.story.@(ts|tsx)').replace(/\\/g, '/')];

module.exports = {
  stories,
  addons: [
    'storybook-addon-turbo-build',
    'storybook-dark-mode',
    'storybook-addon-outline',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../../tsconfig.json'),
        }),
      ],
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  },
};
