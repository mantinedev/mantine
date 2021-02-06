import React from 'react';
import { storiesOf } from '@storybook/react';
import { OPEN_COLOR_THEMES } from '@mantine/types';
import { MantineProvider } from '@mantine/theme';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Badge from './Badge';

const badges = OPEN_COLOR_THEMES.map((color) => (
  <Badge color={color} key={color}>
    {color}
  </Badge>
));

const pills = OPEN_COLOR_THEMES.map((color) => (
  <Badge color={color} key={color} variant="pill">
    {color}
  </Badge>
));

const outlines = OPEN_COLOR_THEMES.map((color) => (
  <Badge color={color} key={color} variant="outline">
    {color}
  </Badge>
));

storiesOf('@mantine/core', module).add('Badge', () => (
  <MantineProvider>
    <ElementsGroup>{badges}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 20 }}>{pills}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 20 }}>{outlines}</ElementsGroup>
  </MantineProvider>
));
