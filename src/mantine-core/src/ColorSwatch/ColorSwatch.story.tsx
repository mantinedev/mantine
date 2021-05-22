import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '../theme';
import { Group } from '../Group/Group';
import { ColorSwatch } from './ColorSwatch';

const swatches = Object.keys(DEFAULT_THEME.colors).map((theme) => (
  <ColorSwatch color={DEFAULT_THEME.colors[theme][5]} key={theme} size={20} />
));

const radiuses = ([0, 'xs', 'sm', 'md', 'lg', 'xl', 1000] as any[]).map((radius) => (
  <ColorSwatch color={DEFAULT_THEME.colors.blue[5]} key={radius} radius={radius} size={100} />
));

storiesOf('@mantine/core/ColorSwatch', module)
  .add('General Usage', () => <Group style={{ padding: 15 }}>{swatches}</Group>)
  .add('Custom radius', () => <Group style={{ padding: 15 }}>{radiuses}</Group>)
  .add('Custom components', () => (
    <Group style={{ padding: 15 }}>
      <ColorSwatch color="#000" component="button" />
      <ColorSwatch color="#000" component="a" href="https://mantine.dev" />
    </Group>
  ));
