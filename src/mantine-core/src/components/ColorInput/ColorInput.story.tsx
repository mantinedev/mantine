import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Saturation } from './Saturation/Saturation';
import { Hue } from './Hue/Hue';
import { Alpha } from './Alpha/Alpha';
import { ColorInput } from './ColorInput';

function SaturationWrapper() {
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 1 });
  return <Saturation value={value} onChange={onChange} />;
}

function HueWrapper() {
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 1 });
  return <Hue value={value} onChange={onChange} />;
}

function AlphaWrapper() {
  const [value, onChange] = useState({ h: 90, v: 50, s: 50, a: 0.5 });
  return <Alpha value={value} onChange={onChange} />;
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
  .add('Input', () => (
    <div style={{ padding: 40 }}>
      <ColorInput />
    </div>
  ));
