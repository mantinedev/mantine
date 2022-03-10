import React, { useState } from 'react';
import { SegmentedControl, SegmentedControlProps } from '@mantine/core';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

export function SegmentedControlWrapper(props: Omit<SegmentedControlProps, 'data'>) {
  const [value, onChange] = useState<string>('react');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}
