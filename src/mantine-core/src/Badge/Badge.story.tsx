import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Badge } from './Badge';

const colors = Object.keys(DEFAULT_THEME.colors);

const badges = colors.map((color) => (
  <Badge color={color} key={color}>
    {color}
  </Badge>
));

const pills = colors.map((color) => (
  <Badge color={color} key={color} variant="pill">
    {color}
  </Badge>
));

const outlines = colors.map((color) => (
  <Badge color={color} key={color} variant="outline">
    {color}
  </Badge>
));

storiesOf('@mantine/core', module).add('Badge', () => (
  <MantineProvider>
    <ElementsGroup>
      <Badge>Default badge</Badge>
      {badges}
    </ElementsGroup>
    <ElementsGroup style={{ marginTop: 20 }}>{pills}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 20 }}>{outlines}</ElementsGroup>
  </MantineProvider>
));
