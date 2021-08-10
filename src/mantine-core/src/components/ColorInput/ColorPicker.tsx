import React, { useState, useEffect, useRef } from 'react';
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
  const skipRef = useRef(false);
  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: '#000000',
    rule: (val) => isColorValid(val),
    onChange,
  });

  const [parsed, setParsed] = useState(parseColor(_value));

  const handleChange = (color: Partial<HsvaColor>) => {
    skipRef.current = true;
    setParsed((current) => {
      const next = { ...current, ...color };
      setValue(convertHsvaTo(format, next));
      return next;
    });
    skipRef.current = false;
  };

  useEffect(() => {
    if (isColorValid(value) && !skipRef.current) {
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
