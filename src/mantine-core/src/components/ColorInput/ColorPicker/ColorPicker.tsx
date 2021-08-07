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
    <div>
      <Saturation value={value} onChange={onChange} />
      <Hue value={value} onChange={onChange} />
      <Alpha value={value} onChange={onChange} />
    </div>
  );
}

ColorPicker.displayName = '@mantine/core/ColorPicker';
