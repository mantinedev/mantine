import React from 'react';
import { Slider, Input } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';

const MARKS = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

interface SizeControlProps {
  value: string;
  label: string;
  step?: number;
  onChange(value: string): void;
}

export function SizeControl({ label, value, onChange, step = 25, ...others }: SizeControlProps) {
  const _value = MARKS.find((mark) => mark.label === value).value;
  const handleChange = (val: number) => onChange(MARKS.find((mark) => mark.value === val).label);

  return (
    <Input.Wrapper labelElement="div" label={upperFirst(label)} {...others}>
      <Slider
        value={_value}
        onChange={handleChange}
        label={(val) => MARKS.find((mark) => mark.value === val).label}
        step={step}
        marks={MARKS}
        styles={{ markLabel: { display: 'none' } }}
      />
    </Input.Wrapper>
  );
}

SizeControl.initialValue = 'md';
