import React from 'react';
import { OPEN_COLOR_THEMES } from '@mantine/types';
import { storiesOf } from '@storybook/react';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Pill from './Pill';

const pills = OPEN_COLOR_THEMES.map((theme) => (
  <Pill theme={theme} key={theme}>
    {theme}
  </Pill>
));

storiesOf('@mantine/core/Pill', module).add('General Usage', () => (
  <ElementsGroup>{pills}</ElementsGroup>
));
