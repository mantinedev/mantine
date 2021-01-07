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

    config.module.rules.push({
      test: /\.(less)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]',
            },
          },
        },
        {
          loader: 'less-loader',
          options: {
            additionalData: "@import 'open-color/open-color.less';",
          },
        },
      ],
    });

    return config;
  },
};
