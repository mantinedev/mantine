import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Group } from '../Group/Group';
import { ColorSwatch } from './ColorSwatch';

const swatches = Object.keys(DEFAULT_THEME.colors).map((theme) => (
  <ColorSwatch color={DEFAULT_THEME.colors[theme][5]} key={theme} size={20} />
));

const transparent = Object.keys(DEFAULT_THEME.colors).map((theme) => (
  <ColorSwatch
    color={DEFAULT_THEME.fn.rgba(DEFAULT_THEME.colors[theme][5], 0.5)}
    key={theme}
    size={20}
  />
));

storiesOf('@mantine/core/ColorSwatch/stories', module)
  .add('Colors', () => <Group style={{ padding: 15 }}>{swatches}</Group>)
  .add('Opaque colors', () => <Group style={{ padding: 15 }}>{transparent}</Group>)
  .add('Custom components', () => (
    <Group style={{ padding: 15 }}>
      <ColorSwatch color="#f300f3" component="button" />
      <ColorSwatch color="#000" component="a" href="https://mantine.dev" />
    </Group>
  ));
