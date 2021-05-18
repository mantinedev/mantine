import React from 'react';
import { Select, useMantineTheme, upperFirst } from '@mantine/core';

interface ColorControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function ColorControl({ value, label, onChange, ...others }: ColorControlProps) {
  const theme = useMantineTheme();

  const colorsData = Object.keys(theme.colors)
    .filter((color) => color !== 'dark')
    .map((color) => ({
      label: upperFirst(color),
      value: color,
    }));

  return (
    <Select
      {...others}
      data={colorsData}
      value={value}
      label={upperFirst(label)}
      onChange={(event) => onChange(event.currentTarget.value)}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}

ColorControl.initialValue = 'blue';
