import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getPath = (storyPath: string) => path.resolve(process.cwd(), storyPath).replace(/\\/g, '/');

function getStoryPaths(fileName: string = '*') {
  return [
    getPath(`packages/@mantine/*/src/**/${fileName}.story.@(ts|tsx)`),
    getPath(`packages/@mantinex/*/src/**/${fileName}.story.@(ts|tsx)`),
    getPath(`packages/@docs/*/src/**/${fileName}.story.@(ts|tsx)`),
  ];
}

const componentName = process.env.COMPONENT;
const storiesPath = !componentName
  ? [...getStoryPaths()]
  : [...getStoryPaths(componentName), ...getStoryPaths(`${componentName}.demos`)];

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  features: {
    sidebarOnboardingChecklist: false,
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
