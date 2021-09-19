import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Loader } from './Loader';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Loader key={color} color={color} style={{ display: 'block', marginTop: 15 }} {...props} />
  ));

const sizes = ([10, 'xs', 'sm', 'md', 'lg', 'xl', 100] as const).map((size) => (
  <Loader key={size} size={size} style={{ display: 'block', marginTop: 15 }} />
));

storiesOf('@mantine/core/Loader', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes()}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      {getThemes({ colorScheme: 'dark' })}
    </div>
  ));
