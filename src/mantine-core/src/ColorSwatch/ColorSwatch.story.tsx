import React from 'react';
import oc from 'open-color';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { ColorSwatch } from './ColorSwatch';

const swatches = Object.keys(DEFAULT_THEME.colors).map((theme) => (
  <ColorSwatch color={oc[theme][5]} key={theme} />
));

storiesOf('@mantine/core', module).add('ColorSwatch', () => (
  <MantineProvider>
    <ElementsGroup>{swatches}</ElementsGroup>
  </MantineProvider>
));
