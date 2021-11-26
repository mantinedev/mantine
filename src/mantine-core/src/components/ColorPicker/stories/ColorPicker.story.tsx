import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MANTINE_SIZES } from '@mantine/styles';
import { ColorPicker } from '../ColorPicker';

const sizes = MANTINE_SIZES.map((size) => (
  <div style={{ marginTop: 40 }}>
    <ColorPicker
      key={size}
      format="rgba"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      size={size}
    />
  </div>
));

storiesOf('@mantine/core/ColorPicker/stories', module).add('Sizes', () => (
  <div style={{ padding: 40 }}>{sizes}</div>
));
