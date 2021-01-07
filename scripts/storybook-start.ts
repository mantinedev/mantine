import path from 'path';
import storybook from '@storybook/react/standalone';

storybook({
  port: 9000,
  mode: 'dev',
  configDir: path.join(__dirname, '../configuration/storybook'),
});
