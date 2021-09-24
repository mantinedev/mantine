import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MANTINE_SIZES } from '@mantine/styles';
import { ColorPicker } from './ColorPicker';
import { DarkStory } from '../../../demos';

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

function BaseStory() {
  return (
    <div style={{ padding: 40 }}>
      <ColorPicker
        format="rgba"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </div>
  );
}

storiesOf('@mantine/core/ColorPicker', module)
  .add('General usage', () => <BaseStory />)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Dark theme', () => (
    <DarkStory>
      <BaseStory />
    </DarkStory>
  ));
