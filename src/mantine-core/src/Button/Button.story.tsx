import React from 'react';
import { storiesOf } from '@storybook/react';
import { OPEN_COLOR_THEMES } from '@mantine/types';
import Button from './Button';

const themes = OPEN_COLOR_THEMES.map((theme) => (
  <div key={theme} style={{ marginTop: 10 }}>
    <Button theme={theme}>{theme}</Button>
  </div>
));

storiesOf('@mantine/core/Button', module).add('General usage', () => (
  <div>
    <div style={{ marginTop: 10 }}>
      <Button theme="white">White (default)</Button>
    </div>

    {themes}

    <div style={{ marginTop: 10 }}>
      <Button disabled>Disabled</Button>
    </div>
  </div>
));
