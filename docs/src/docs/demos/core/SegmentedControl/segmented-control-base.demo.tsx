import React from 'react';
import { SegmentedControlWrapper } from './segmented-control-wrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React, { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

// This data is later used in all examples
const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

function Demo() {
  const [value, onChange] = useState('react');

  return (
    <SegmentedControl
      data={data}
      value={value}
      onChange={onChange}
    />
  );
}`;

export function SegmentedControlBaseDemo({ toggle = false }: { toggle: boolean }) {
  return (
    <CodeDemo code={code} language="tsx" toggle={toggle}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SegmentedControlWrapper />
      </div>
    </CodeDemo>
  );
}
