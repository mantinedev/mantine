import path from 'path';
import { argv } from 'yargs';
import storybook from '@storybook/react/standalone';

storybook({
  port: (argv as any).gallery ? 7523 : 7520,
  mode: 'dev',
  configDir: path.join(__dirname, '../configuration/storybook'),
});
