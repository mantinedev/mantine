import path from 'path';
import { argv } from 'yargs';
import storybook from '@storybook/react/standalone';

const _argv = argv as any;

storybook({
  port: _argv.gallery ? 7523 : 7520,
  mode: 'dev',
  configDir: path.join(__dirname, '../configuration/storybook'),
});
