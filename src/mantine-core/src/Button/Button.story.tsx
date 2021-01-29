import React from 'react';
import { storiesOf } from '@storybook/react';
import { OPEN_COLOR_THEMES } from '@mantine/types';
import ElementsGroup from '../ElementsGroup/ElementsGroup';
import Button from './Button';

const themes = OPEN_COLOR_THEMES.map((theme) => (
  <Button theme={theme} key={theme}>
    {theme}
  </Button>
));

storiesOf('@mantine/core/Button', module).add('General usage', () => (
  <div>
    <Button theme="white">White (default)</Button>
    <ElementsGroup style={{ marginTop: 10 }}>{themes}</ElementsGroup>
    <Button style={{ marginTop: 10 }} disabled>
      Disabled
    </Button>
  </div>
));
