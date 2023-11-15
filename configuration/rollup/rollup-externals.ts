import path from 'node:path';
import fs from 'fs-extra';

const packageJson = fs.readJSONSync(path.join(process.cwd(), './package.json'));

export const ROLLUP_EXTERNALS = [
  'dayjs/locale/ru',
  'dayjs/plugin/customParseFormat.js',
  'dayjs/plugin/customParseFormat',
  'dayjs/plugin/utc.js',
  'dayjs/plugin/timezone.js',
  'klona/full',
  'highlight.js/lib/languages/typescript',
  '@mantine/carousel',
  '@mantine/code-highlight',
  '@mantine/colors-generator',
  '@mantine/core',
  '@mantine/dates',
  '@mantine/demos',
  '@mantine/dropzone',
  '@mantine/ds',
  '@mantine/form',
  '@mantine/hooks',
  '@mantine/modals',
  '@mantine/notifications',
  '@mantine/nprogress',
  '@mantine/spotlight',
  '@mantine/store',
  '@mantine/styles-api',
  '@mantine/tiptap',
  '@mantine/vanilla-extract',
  ...Object.keys({
    ...packageJson.peerDependencies,
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  }),
];
