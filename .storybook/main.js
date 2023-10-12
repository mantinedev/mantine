const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const path = require('path');
const { globSync } = require('glob');
const argv = require('yargs').argv;

const getPath = (storyPath) => path.resolve(__dirname, storyPath).replace(/\\/g, '/');

const getStoryPaths = (fileName = '*') => {
  const basePath = globSync(getPath('../src'))[0];
  const files = globSync(getPath('../src/mantine-*/src/**/*.story.@(ts|tsx)'));
  const packagesWithStories = {};
  for(const file of files) {
    const packageName = file.replace(basePath, '').split(path.sep)[1];
    packagesWithStories[packageName] = true
  }
  return Object.keys(packagesWithStories).map((packageName) => {
    return getPath(`../src/${packageName}/src/**/${fileName}.story.@(ts|tsx)`)
  })
}

const storiesPath = !argv._[1]
  ? [
    // can't use glob pattern (see https://github.com/storybookjs/storybook/issues/19812)
    ...getStoryPaths()
  ]
  : [
    ...getStoryPaths(argv._[1]),
    ...getStoryPaths(`${argv._[1]}.demos`),
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

  typescript: {
    reactDocgen: false,
  },
};
