import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fg from 'fast-glob';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const currentModuleUrl = typeof import.meta !== 'undefined' ? import.meta.url : '';
const __filename = fileURLToPath(currentModuleUrl);
const __dirname = path.dirname(__filename);

const nodeRequire = createRequire(currentModuleUrl);

const { argv } = yargs(hideBin(process.argv));

if (argv instanceof Promise) {
  throw new Error('Failed to load cli arguments');
}

const getPath = (storyPath: string) => path.resolve(process.cwd(), storyPath).replace(/\\/g, '/');
const getGlobPaths = (paths: string[]) =>
  paths.reduce<string[]>((acc, path) => [...acc, ...fg.sync(path)], []);

function getAbsolutePath(value: string) {
  return path.dirname(nodeRequire.resolve(path.join(value, 'package.json')));
}

function getStoryPaths(fileName: string | number = '*') {
  return getGlobPaths([
    getPath(`packages/@mantine/*/src/**/${fileName}.story.@(ts|tsx)`),
    getPath(`packages/@mantinex/*/src/**/${fileName}.story.@(ts|tsx)`),
    getPath(`packages/@docs/*/src/**/${fileName}.story.@(ts|tsx)`),
  ]);
}

const storiesPath = !argv._[1]
  ? [...getStoryPaths()]
  : [...getStoryPaths(argv._[1]), ...getStoryPaths(`${argv._[1]}.demos`)];

export default {
  stories: storiesPath,
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },

  addons: [
    getAbsolutePath('storybook-dark-mode'),
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
    ],
  },

  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },

  webpackFinal: async (config: any) => {
    config.resolve = {
      ...config.resolve,
      extensionAlias: { '.js': ['.ts', '.tsx', '.js'] },
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../tsconfig.json'),
        }),
      ],
    };

    return config;
  },

  docs: {
    autodocs: false,
  },

  typescript: {
    reactDocgen: false,
  },
};
