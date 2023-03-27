import React, { useState } from 'react';
import { Button } from '../Button';
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

export function ReadOnly() {
  return <SegmentedControl readOnly data={data} />;
}

export function EmptyData() {
  return <SegmentedControl data={[]} />;
}

export function ToggleEmptyData() {
  const [emptyData, setEmptyData] = useState(true);

  return (
    <>
      <Button onClick={() => setEmptyData((e) => !e)}>Toggle Data</Button>
      <br />
      <SegmentedControl data={emptyData ? [] : data} />
    </>
  );
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

export function ColorsIndexReference() {
  return <SegmentedControl color="cyan.9" data={data} />;
}
