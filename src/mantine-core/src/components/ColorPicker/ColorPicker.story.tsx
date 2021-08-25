import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MANTINE_SIZES } from '../../theme';
import { ColorPicker } from './ColorPicker';

const sizes = MANTINE_SIZES.map((size) => (
  <div style={{ backgroundColor: DEFAULT_THEME.colors.gray[0], marginTop: 40 }}>
    <ColorPicker
      key={size}
      format="rgba"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      size={size}
    />
  </div>
));

storiesOf('@mantine/core/ColorPicker', module)
  .add('General usage', () => (
    <div style={{ padding: 40 }}>
      <div style={{ backgroundColor: DEFAULT_THEME.colors.gray[0] }}>
        <ColorPicker
          format="rgba"
          swatches={Object.keys(DEFAULT_THEME.colors).map(
            (color) => DEFAULT_THEME.colors[color][6]
          )}
        />
      </div>
    </div>
  ))
  .add('sizes', () => <div style={{ padding: 40 }}>{sizes}</div>);
