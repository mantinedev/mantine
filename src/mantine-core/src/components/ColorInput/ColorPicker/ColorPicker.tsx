import React from 'react';
import { DefaultProps } from '../../../theme';
import { HsvaColor } from '../types';
import { Hue, HueStylesNames } from '../Hue/Hue';
import { Alpha, AlphaStylesNames } from '../Alpha/Alpha';
import { Saturation, SaturationStylesNames } from '../Saturation/Saturation';

export type ColorPickerStylesNames = HueStylesNames | AlphaStylesNames | SaturationStylesNames;

interface ColorPickerProps extends DefaultProps<ColorPickerStylesNames> {
  value: HsvaColor;
  onChange(color: HsvaColor): void;
}

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div style={{ width: 200 }}>
      <Saturation value={value} onChange={onChange} />
      <Hue value={value} onChange={onChange} style={{ marginTop: 10 }} />
      <Alpha value={value} onChange={onChange} style={{ marginTop: 10 }} />
    </div>
  );
}

ColorPicker.displayName = '@mantine/core/ColorPicker';
