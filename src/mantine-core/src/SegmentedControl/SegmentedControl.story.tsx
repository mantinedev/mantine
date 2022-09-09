import React from 'react';
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
