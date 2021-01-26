import path from 'path';
import storybook from '@storybook/react/standalone';

storybook({
  port: 7000,
  mode: 'dev',
  configDir: path.join(__dirname, '../configuration/storybook'),
});
