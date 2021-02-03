/* eslint-disable no-param-reassign */

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [path.join(__dirname, '../../src/**/*.story.@(ts|tsx)')],
  addons: ['@storybook/addon-essentials'],
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

    return config;
  },
};
