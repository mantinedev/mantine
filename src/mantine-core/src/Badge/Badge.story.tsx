import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
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
  <>
    <ElementsGroup>
      <Badge>Default badge</Badge>
      {badges}
    </ElementsGroup>
    <ElementsGroup style={{ marginTop: 20 }}>{pills}</ElementsGroup>
    <ElementsGroup style={{ marginTop: 20 }}>{outlines}</ElementsGroup>
    <div style={{ width: 180, padding: 20, backgroundColor: '#eee', marginTop: 20 }}>
      <Badge fullWidth>Content of this badge will definitely overflow its container</Badge>

      <Badge fullWidth variant="pill" style={{ marginTop: 10 }}>
        Content of this badge will definitely overflow its container
      </Badge>

      <Badge fullWidth variant="outline" style={{ marginTop: 10 }}>
        Content of this badge will definitely overflow its container
      </Badge>
    </div>
  </>
));
