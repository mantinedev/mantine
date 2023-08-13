/* eslint-disable no-param-reassign */
const path = require('path');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

const getPath = (storyPath) => path.resolve(__dirname, storyPath).replace(/\\/g, '/');

const storiesPath = !argv._[0]
  ? [getPath('../../src/**/*.story.@(ts|tsx)')]
  : [
      getPath(`../../src/mantine-*/**/${argv._[0]}.story.@(ts|tsx)`),
      getPath(`../../src/mantine-*/**/${argv._[0]}.demos.story.@(ts|tsx)`),
    ];

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [...storiesPath],
  addons: ['storybook-addon-turbo-build', 'storybook-dark-mode'],
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
