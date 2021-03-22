import React from 'react';
import { storiesOf } from '@storybook/react';
import { RocketIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { ThemeIcon } from './ThemeIcon';

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ThemeIcon key={color} color={color} style={{ marginTop: 20 }} size="lg" {...props}>
      <RocketIcon style={{ width: 20, height: 20 }} />
    </ThemeIcon>
  ));

storiesOf('@mantine/core/ThemeIcon', module)
  .add('Filled variant', () => <ElementsGroup style={{ padding: 20 }}>{getThemes()}</ElementsGroup>)
  .add('Light variant', () => (
    <ElementsGroup style={{ padding: 20 }}>{getThemes({ variant: 'light' })}</ElementsGroup>
  ))
  .add('Gradient variant', () => (
    <ElementsGroup style={{ padding: 20 }}>
      {getThemes({ variant: 'gradient', radius: 'xl', size: 'xl' })}
    </ElementsGroup>
  ));
