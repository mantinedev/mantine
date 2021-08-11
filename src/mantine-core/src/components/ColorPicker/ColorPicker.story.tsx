import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MANTINE_SIZES } from '../../theme';
import { ColorPicker } from './ColorPicker';

const sizes = MANTINE_SIZES.map((size) => (
  <ColorPicker
    key={size}
    format="rgba"
    swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
    size={size}
    style={{ marginTop: 20 }}
  />
));

storiesOf('@mantine/core/ColorPicker', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <ColorPicker
        format="rgba"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </div>
  ))
  .add('sizes', () => <div style={{ padding: 40, maxWidth: 400 }}>{sizes}</div>);
