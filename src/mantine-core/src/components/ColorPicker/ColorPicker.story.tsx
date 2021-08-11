import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '../../theme';
import { ColorPicker } from './ColorPicker';

storiesOf('@mantine/core/ColorPicker', module).add('General usage', () => (
  <div style={{ padding: 40 }}>
    <ColorPicker
      format="rgba"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
    />
  </div>
));
