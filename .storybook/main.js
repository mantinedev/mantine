const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const path = require('path');
const fg = require('fast-glob');
const argv = require('yargs').argv;

const getPath = (storyPath) => path.resolve(process.cwd(), storyPath).replace(/\\/g, '/');
const getGlobPaths = (paths) => paths.reduce((acc, path) => [...acc, ...fg.sync(path)], []);

function getStoryPaths(fileName = '*') {
  return getGlobPaths([
    getPath(`packages/@mantine/*/src/**/${fileName}.story.@(ts|tsx)`),
    getPath(`packages/@mantinex/*/src/**/${fileName}.story.@(ts|tsx)`),
    getPath(`packages/@docs/*/src/**/${fileName}.story.@(ts|tsx)`),
  ]);
}

const storiesPath = !argv._[1]
  ? [...getStoryPaths()]
  : [...getStoryPaths(argv._[1]), ...getStoryPaths(`${argv._[1]}.demos`)];

module.exports = {
  stories: storiesPath,

  addons: [
    'storybook-dark-mode',
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
        ],
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
      // handle modules with .js extensions
      extensionAlias: {
        ".js": [".ts", ".tsx", ".js"],
      },
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
    autodocs: false,
  },

  typescript: {
    reactDocgen: false,
  },
};
