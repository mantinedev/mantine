import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '../../theme';
import { ColorInput } from './ColorInput';

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
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />

      <button type="button" onClick={() => setValue('rgba(242, 165, 201, 0.54)')}>
        Set value
      </button>
    </div>
  );
}

storiesOf('@mantine/core/ColorInput', module).add('General usage', () => (
  <div style={{ padding: 40, maxWidth: 400 }}>
    <ColorInput label="Color input" placeholder="Pick color" format="rgba" />
    <ColorInput
      label="Disallow input"
      placeholder="Pick color"
      format="rgba"
      disallowInput
      style={{ marginTop: 15 }}
    />
    <ControlledInput />
  </div>
));
