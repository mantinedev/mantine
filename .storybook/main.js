import { dirname, join } from "path";
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

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

export default {
  stories: storiesPath,

  addons: [
    '@storybook/addon-webpack5-compiler-babel',
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
    name: getAbsolutePath("@storybook/nextjs"),
    options: {}
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['@babel/plugin-transform-runtime', 'react-refresh/babel'],
          },
        },
      },
    ]
  },

  webpackFinal: async function(config) {
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
    // config.plugins.pop();

    return config;
  },

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: false,
  },

  typescript: {
    reactDocgen: false,
  },
};
