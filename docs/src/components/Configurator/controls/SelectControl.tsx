import React from 'react';
import { Select, useMantineTheme, upperFirst } from '@mantine/core';

interface SelectControlProps {
  value: string;
  label: string;
  capitalize: boolean;
  onChange(value: string): void;
  data: { label: string; value: string }[];
}

export function SelectControl({
  value,
  label,
  onChange,
  data,
  capitalize: capitalizeItems = true,
  ...others
}: SelectControlProps) {
  const theme = useMantineTheme();

  return (
    <Select
      data={data.map((item) => ({
        value: item.value,
        label: capitalizeItems ? upperFirst(item.label) : item.label,
      }))}
      value={value}
      label={upperFirst(label)}
      onChange={(event) => onChange(event.currentTarget.value)}
      variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
      {...others}
    />
  );
}

SelectControl.initialValue = '';
