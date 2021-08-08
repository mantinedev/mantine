import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Saturation } from './Saturation/Saturation';
import { DEFAULT_THEME } from '../../theme';
import { Hue } from './Hue/Hue';
import { Alpha } from './Alpha/Alpha';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { ColorInput } from './ColorInput';

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
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 1 });
  const handleChange = (val: Partial<typeof value>) =>
    onChange((current) => ({ ...current, ...val }));
  return (
    <ColorPicker
      value={value}
      onChange={handleChange}
      withAlpha
      swatches={[...DEFAULT_THEME.colors.red, ...DEFAULT_THEME.colors.blue.slice(0, 4)]}
    />
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
    <div style={{ padding: 40 }}>
      <ColorInput />
    </div>
  ));
