import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '../../theme';
import { WrappedBurger } from './demos/WrappedBurger';

const getThemes = (props?: any) =>
  ['#fff', '#fe6734'].map((color) => <WrappedBurger key={color} color={color} {...props} />);

const sizes = (['xs', 'sm', 'md', 'lg', 'xl', 80, 120] as const).map((size) => (
  <WrappedBurger size={size} key={size} />
));

storiesOf('@mantine/core/Burger', module)
  .add('Themes', () => <div style={{ display: 'flex' }}>{getThemes()}</div>)
  .add('Sizes', () => <div style={{ display: 'flex' }}>{sizes}</div>)
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <div style={{ display: 'flex' }}>{getThemes({ themeOverride: { colorScheme: 'dark' } })}</div>
    </div>
  ));
