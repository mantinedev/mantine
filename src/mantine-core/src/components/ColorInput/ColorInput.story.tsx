import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Saturation } from './Saturation/Saturation';
import { DEFAULT_THEME } from '../../theme';
import { Text } from '../Text/Text';
import { Hue } from './Hue/Hue';
import { Alpha } from './Alpha/Alpha';
import { ColorInput } from './ColorInput';
import { ColorPicker } from './ColorPicker';

function SaturationWrapper() {
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 1 });
  const handleChange = (val: Partial<typeof value>) =>
    onChange((current) => ({ ...current, ...val }));
  return <Saturation value={value} onChange={handleChange} />;
}

function HueWrapper() {
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 1 });
  const handleChange = (val: Partial<typeof value>) =>
    onChange((current) => ({ ...current, ...val }));
  return <Hue value={value} onChange={handleChange} />;
}

function AlphaWrapper() {
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 0.5 });
  const handleChange = (val: Partial<typeof value>) =>
    onChange((current) => ({ ...current, ...val }));
  return <Alpha value={value} onChange={handleChange} />;
}

function ColorPickerWrapper() {
  const [value, onChange] = useState('rgba(58, 161, 156, 0.48)');
  return (
    <>
      <ColorPicker
        value={value}
        onChange={onChange}
        format="rgba"
        swatches={[...DEFAULT_THEME.colors.red, ...DEFAULT_THEME.colors.blue.slice(0, 4)]}
      />
      <Text>Value: {value}</Text>
      <button type="button" onClick={() => onChange('rgba(242, 165, 201, 0.54)')}>
        Set value
      </button>
    </>
  );
}

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

storiesOf('@mantine/core/ColorInput', module)
  .add('Saturation', () => (
    <div style={{ padding: 40 }}>
      <SaturationWrapper />
    </div>
  ))
  .add('Hue', () => (
    <div style={{ padding: 40 }}>
      <HueWrapper />
    </div>
  ))
  .add('Alpha', () => (
    <div style={{ padding: 40 }}>
      <AlphaWrapper />
    </div>
  ))
  .add('ColorPicker', () => (
    <div style={{ padding: 40 }}>
      <ColorPickerWrapper />
    </div>
  ))
  .add('Input', () => (
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
