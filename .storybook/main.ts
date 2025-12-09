import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/nextjs';
import fg from 'fast-glob';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { argv } = yargs(hideBin(process.argv));

if (argv instanceof Promise) {
  throw new Error('Failed to load cli arguments');
}

const getPath = (storyPath: string) => path.resolve(process.cwd(), storyPath).replace(/\\/g, '/');
const getGlobPaths = (paths: string[]) =>
  paths.reduce<string[]>((acc, path) => [...acc, ...fg.sync(path)], []);

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

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: storiesPath,
  addons: [],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      extensionAlias: { '.js': ['.ts', '.tsx', '.js'] },
      plugins: [
        ...(config.resolve?.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../tsconfig.json'),
        }),
      ],
    };

    return config;
  },
};

export default config;
