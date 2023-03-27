import React, { useState } from 'react';
import { DEFAULT_THEME, MANTINE_SIZES } from '@mantine/styles';
import { WithinOverlays } from '@mantine/storybook';
import { ColorInput } from './ColorInput';

export default { title: 'ColorInput' };

export function Controlled() {
  const [value, setValue] = useState('rgba(84, 37, 186, 0.81)');
  return (
    <div style={{ margin: 'auto', maxWidth: 400, marginTop: 15 }}>
      <ColorInput
        label="Controlled input"
        placeholder="Pick color"
        format="rgba"
        value={value}
        onChange={setValue}
        swatches={[
          ...Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6]),
          'rgba(0, 0, 0, 0)',
        ]}
        closeOnColorSwatchClick
        mb="md"
      />

      <button type="button" onClick={() => setValue('rgba(242, 165, 201, 0.54)')}>
        Set value
      </button>
      <button type="button" onClick={() => setValue('')}>
        Set empty
      </button>
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => (
    <ColorInput
      size={size}
      label="Color input"
      placeholder="Pick color"
      format="rgba"
      mt="md"
      styles={{ rightSection: { background: 'pink' } }}
    />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function Overlays() {
  return (
    <WithinOverlays>
      <ColorInput
        format="rgba"
        swatches={[
          ...Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6]),
          'rgba(0, 0, 0, 0)',
        ]}
        label="Color"
        placeholder="Color"
        withinPortal={false}
      />
    </WithinOverlays>
  );
}

export function WithoutPickerAndSwatches() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ColorInput withPicker={false} swatches={[]} />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ColorInput label="Read only" placeholder="Read only" readOnly />
    </div>
  );
}

export function WithEyeDropper() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <ColorInput size="xs" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="sm" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="md" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="lg" label="With eye dropper" placeholder="Read only" withEyeDropper />
      <ColorInput size="xl" label="With eye dropper" placeholder="Read only" withEyeDropper />
    </div>
  );
}
