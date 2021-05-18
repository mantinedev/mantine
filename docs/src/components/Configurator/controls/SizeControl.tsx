import React from 'react';
import { InputWrapper, SegmentedControl, upperFirst } from '@mantine/core';

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => ({
  value: size,
  label: size,
}));

interface SizeControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
}

export function SizeControl({ value, label, onChange, ...others }: SizeControlProps) {
  return (
    <InputWrapper labelElement="div" label={upperFirst(label)} {...others}>
      <SegmentedControl
        data={SIZES}
        value={value}
        onChange={onChange}
        fullWidth
        transitionDuration={100}
        transitionTimingFunction="ease"
      />
    </InputWrapper>
  );
}

SizeControl.initialValue = 'md';
