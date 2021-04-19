import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Kbd } from './Kbd';

storiesOf('@mantine/core/Kbd', module)
  .add('General usage', () => (
    <div style={{ padding: 50 }}>
      <Kbd>shift</Kbd> + <Kbd>H</Kbd>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <Kbd themeOverride={{ colorScheme: 'dark' }}>shift</Kbd> +{' '}
      <Kbd themeOverride={{ colorScheme: 'dark' }}>H</Kbd>
    </div>
  ));
