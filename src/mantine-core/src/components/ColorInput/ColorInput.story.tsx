import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MANTINE_SIZES } from '@mantine/styles';
import { ColorInput } from './ColorInput';
import { DarkStory } from '../../../demos';

const sizes = MANTINE_SIZES.map((size) => (
  <ColorInput
    size={size}
    label="Color input"
    placeholder="Pick color"
    format="rgba"
    style={{ marginTop: 20 }}
  />
));

function ControlledInput() {
  const [value, setValue] = useState('rgba(84, 37, 186, 0.81)');
  return (
    <div style={{ marginTop: 15 }}>
      <ColorInput
        label="Controlled input"
        placeholder="Pick color"
        format="rgba"
        value={value}
        onChange={setValue}
        swatches={[
          ...Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6]),
          'transparent',
        ]}
      />

      <button type="button" onClick={() => setValue('rgba(242, 165, 201, 0.54)')}>
        Set value
      </button>
    </div>
  );
}

function BaseStory() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ColorInput label="Color input" placeholder="Pick color" format="hsla" />
      <ColorInput
        label="Disallow input"
        placeholder="Pick color"
        disallowInput
        withPicker={false}
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
        style={{ marginTop: 15 }}
      />
      <ColorInput
        format="hex"
        disallowInput
        label="color"
        withPicker={false}
        swatches={[
          '#25262b',
          '#868e96',
          '#fa5252',
          '#e64980',
          '#be4bdb',
          '#7950f2',
          '#4c6ef5',
          '#228be6',
          '#15aabf',
          '#12b886',
          '#40c057',
          '#82c91e',
          '#fab005',
          '#fd7e14',
        ]}
        style={{ marginTop: 15 }}
        dropdownZIndex={1000}
      />
      <ControlledInput />
    </div>
  );
}

storiesOf('@mantine/core/ColorInput', module)
  .add('General usage', () => <BaseStory />)
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Dark theme', () => (
    <DarkStory>
      <BaseStory />
    </DarkStory>
  ));
