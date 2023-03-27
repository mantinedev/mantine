import React from 'react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Group } from '../Group/Group';
import { ColorSwatch } from './ColorSwatch';

export default { title: 'ColorSwatch' };

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

export function Colors() {
  return <Group p={40}>{swatches}</Group>;
}

export function Opacity() {
  return <Group p={40}>{transparent}</Group>;
}

export function CustomComponent() {
  return (
    <Group p={40}>
      <ColorSwatch color="#f300f3" component="button" />
      <ColorSwatch color="#000" component="a" href="https://mantine.dev" />
    </Group>
  );
}
