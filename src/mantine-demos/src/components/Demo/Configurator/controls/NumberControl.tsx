import React from 'react';
import { NumberInput } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';

interface NumberControlProps {
  value: number;
  label: string;
  onChange(value: number): void;
}

export function NumberControl({ value, label, onChange, ...others }: NumberControlProps) {
  return <NumberInput {...others} label={upperFirst(label)} value={value} onChange={onChange} />;
}

NumberControl.initialValue = 0;
