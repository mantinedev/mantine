import React, { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';

export default { title: 'SegmentedControl' };

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Very long label', value: 'svelte' },
];

export function Usage() {
  return <SegmentedControl data={data} />;
}

export function EmptyData() {
  return <SegmentedControl data={[]} />;
}

export function EmptyStringValue() {
  const [value, onChange] = useState('');
  return (
    <SegmentedControl
      data={[...data, { label: 'Empty string', value: '' }]}
      value={value}
      onChange={onChange}
    />
  );
}

export function InvisibleIndicator() {
  return <SegmentedControl color="cyan" data={data} />;
}
