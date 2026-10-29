'use client';

import { useEffect, useState } from 'react';
import { ColorSwatch, TextInput } from '@mantine/core';
import { isValidColor, normalizeColor } from './params';
import classes from './ColorsGenerator.module.css';

interface DarkColorInputProps {
  color: string | null;
  fallback: string;
  onChange: (value: string | null) => void;
}

export function DarkColorInput({ color, fallback, onChange }: DarkColorInputProps) {
  const [draft, setDraft] = useState(color ?? '');

  useEffect(() => {
    setDraft((current) => (normalizeColor(current) === (color ?? '') ? current : (color ?? '')));
  }, [color]);

  const error = draft === '' || isValidColor(draft) ? null : 'Enter a hex, oklch, rgb or hsl color';

  return (
    <TextInput
      label="Dark color scheme base color"
      description="Leave empty to use the same base color in both color schemes"
      placeholder={fallback}
      value={draft}
      error={error}
      leftSection={<ColorSwatch color={color ?? fallback} size={18} />}
      classNames={{ label: classes.label }}
      onChange={(event) => {
        const next = event.currentTarget.value;
        setDraft(next);
        if (next.trim() === '') {
          onChange(null);
        } else if (isValidColor(next)) {
          onChange(normalizeColor(next));
        }
      }}
    />
  );
}
