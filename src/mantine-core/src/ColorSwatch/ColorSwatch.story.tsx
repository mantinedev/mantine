import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { ColorSwatch } from './ColorSwatch';

const swatches = Object.keys(DEFAULT_THEME.colors).map((theme) => (
  <ColorSwatch color={DEFAULT_THEME.colors[theme][5]} key={theme} size={20} />
));

storiesOf('@mantine/core', module).add('ColorSwatch', () => (
  <ElementsGroup>{swatches}</ElementsGroup>
));
