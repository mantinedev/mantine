import React from 'react';
import { InputWrapper, SegmentedControl as MantineSegmentedControl } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';

interface SizeControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
  data: { value: string; label: string }[];
}

export function SegmentedControl({ value, label, onChange, data, ...others }: SizeControlProps) {
  return (
    <InputWrapper labelElement="div" label={upperFirst(label)} {...others}>
      <MantineSegmentedControl
        data={data.map((item) => ({ value: item.value, label: upperFirst(item.label) }))}
        value={value}
        onChange={onChange}
        fullWidth
        transitionDuration={150}
        transitionTimingFunction="ease"
      />
    </InputWrapper>
  );
}

SegmentedControl.initialValue = '';
