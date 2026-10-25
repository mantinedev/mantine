import { builtinModules } from 'node:module';
import packageJson from '../../../package.json';
import { getPackagesList } from '../../packages/get-packages-list';

export const ROLLUP_EXTERNALS = [
  ...builtinModules,
  ...builtinModules.map((m) => `node:${m}`),
  '@modelcontextprotocol/server/stdio',
  'dayjs/locale/ru',
  'dayjs/locale/es',
  'dayjs/plugin/customParseFormat.js',
  'dayjs/plugin/customParseFormat',
  'dayjs/plugin/utc.js',
  'dayjs/plugin/utc',
  'dayjs/plugin/timezone.js',
  'dayjs/plugin/timezone',
  'dayjs/plugin/isoWeek.js',
  'klona/full',
  'highlight.js/lib/languages/typescript',
  'react-is',
  'react/jsx-runtime',
  '@tiptap/react/menus',
  '@tiptap/pm/state',
  '@tiptap/pm/model',
  '@tiptap/pm/view',
  '@tiptap/pm/transform',
  ...getPackagesList().map((pkg) => pkg.packageJson.name!),
  ...Object.keys({
    ...packageJson.devDependencies,
    ...packageJson.dependencies,
  }),
];
