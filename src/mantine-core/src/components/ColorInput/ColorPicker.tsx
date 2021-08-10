import React, { useState, useEffect } from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { MantineColorPicker } from './ColorPicker/MantineColorPicker';
import { convertHsvaTo, isColorValid, parseColor } from './converters';
import { HsvaColor } from './types';

interface ColorPickerProps {
  /** Controlled component value */
  value?: string;

  /** Uncontrolled component default value */
  defaultValue?: string;

  /** Called when color changes */
  onChange?(color: string): void;

  /** Color format */
  format?: 'hex' | 'rgba' | 'rgb' | 'hsl' | 'hsla';

  /** Predefined colors */
  swatches?: string[];
}

export function ColorPicker({ value, defaultValue, onChange, format, swatches }: ColorPickerProps) {
  const [shouldSkip, setShouldSkip] = useState(false);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '#000000',
    rule: (val) => isColorValid(val),
    onChange,
  });

  const [parsed, setParsed] = useState(parseColor(_value));

  const handleChange = (color: Partial<HsvaColor>) => {
    // This is required for useEffect to work, it's dirty but works fine
    setShouldSkip(true);
    Promise.resolve().then(() => setShouldSkip(false));

    setParsed((current) => {
      const next = { ...current, ...color };
      setValue(convertHsvaTo(format, next));
      return next;
    });
  };

  useEffect(() => {
    if (isColorValid(value) && !shouldSkip) {
      setParsed(parseColor(value));
    }
  }, [value]);

  return (
    <MantineColorPicker
      value={parsed}
      onChange={handleChange}
      withAlpha={format === 'rgba' || format === 'hsla'}
      swatches={swatches}
    />
  );
}

ColorPicker.displayName = '@mantine/core/ColorPicker';
