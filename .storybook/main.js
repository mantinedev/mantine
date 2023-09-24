const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const path = require('path');
const argv = require('yargs').argv;

const getPath = (storyPath) => path.resolve(__dirname, storyPath).replace(/\\/g, '/');

const storiesPath = !argv._[0]
  ? [getPath('../src/**/*.story.@(ts|tsx)')]
  : [
      getPath(`../src/mantine-*/**/${argv._[0]}.story.@(ts|tsx)`),
      getPath(`../src/mantine-*/**/${argv._[0]}.demos.story.@(ts|tsx)`),
    ];

module.exports = {
  stories: storiesPath,
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: 'storybook-css-modules',
      options: {
        cssModulesLoaderOptions: {
          importLoaders: 1,
          modules: {
            localIdentName: 'mantine-[hash:base64:7]',
          },
        },
      },
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
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
};
