import React from 'react';
import { TextInput, useMantineTheme } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';

interface StringControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function StringControl({ value, label, onChange, ...others }: StringControlProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      {...others}
      label={upperFirst(label)}
      placeholder={upperFirst(label)}
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
    />
  );
}

StringControl.initialValue = '';
