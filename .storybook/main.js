const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const path = require('path');
const argv = require('yargs').argv;

const getPath = (storyPath) => path.resolve(__dirname, storyPath).replace(/\\/g, '/');

const storiesPath = !argv._[1]
  ? [getPath('../src/**/*.story.@(ts|tsx)')]
  : [
      getPath(`../src/mantine-*/**/${argv._[1]}.story.@(ts|tsx)`),
      getPath(`../src/mantine-*/**/${argv._[1]}.demos.story.@(ts|tsx)`),
    ];

module.exports = {
  stories: storiesPath,

  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [{
          test: /\.css$/,
          sideEffects: true,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        }],
      },
    },
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../tsconfig.json'),
        }),
      ],
    };

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  },

  docs: {
    autodocs: true,
  },
};
