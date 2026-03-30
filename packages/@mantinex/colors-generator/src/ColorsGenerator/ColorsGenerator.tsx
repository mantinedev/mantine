import { useState } from 'react';
import { ColorInput } from '@mantine/core';
import { ColorsList } from './ColorsList/ColorsList';
import { generateColorShades } from './generate-colors-shades';

const reference = [
  '#e5f4ff',
  '#cde2ff',
  '#9bc2ff',
  '#64a0ff',
  '#3984fe',
  '#1d72fe',
  '#0969ff',
  '#0058e4',
  '#004ecc',
  '#0043b5',
];

export function ColorsGenerator() {
  const [color, setColor] = useState('#000000');
  return (
    <div>
      <ColorInput value={color} onChange={setColor} mb="md" size="lg" radius="md" />
      <ColorsList colors={reference} />
      <ColorsList colors={generateColorShades(color)} />
    </div>
  );
}
