/* eslint-disable no-param-reassign */
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

module.exports = {
  stories: [
    path.resolve(__dirname, '../../src/**/*.story.@(ts|tsx)').replace(/\\/g, '/'),
    path.resolve(__dirname, '../../docs/**/*.story.@(ts|tsx)').replace(/\\/g, '/'),
  ],
  addons: ['storybook-addon-turbo-build'],
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
