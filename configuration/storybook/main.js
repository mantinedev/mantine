/* eslint-disable no-param-reassign */

const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;

module.exports = {
  stories: JSON.parse(process.env.STORIES),
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
        mode === 'production'
          ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/',
              },
            }
          : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName:
                mode === 'production'
                  ? '[hash:base64:10]'
                  : '[path][name]__[local]--[hash:base64:5]',
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
