import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Burger } from './Burger';

function WrappedBurger(props: Omit<React.ComponentProps<typeof Burger>, 'opened' | 'onChange'>) {
  const [opened, onChange] = useState(false);
  return (
    <div style={{ padding: 10 }}>
      <Burger opened={opened} onClick={() => onChange((s) => !s)} {...props} />
    </div>
  );
}

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <WrappedBurger key={color} color={color} {...props} />
  ));

const sizes = (['xs', 'sm', 'md', 'lg', 'xl', 80, 120] as any).map((size) => (
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
