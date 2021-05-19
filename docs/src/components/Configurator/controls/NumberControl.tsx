import React from 'react';
import { NumberInput, upperFirst, useMantineTheme } from '@mantine/core';

interface NumberControlProps {
  value: number;
  label: string;
  onChange(value: number): void;
}

export function NumberControl({ value, label, onChange, ...others }: NumberControlProps) {
  const theme = useMantineTheme();

  return (
    <NumberInput
      {...others}
      type="number"
      label={upperFirst(label)}
      value={value}
      onChange={onChange}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}

NumberControl.initialValue = 0;
