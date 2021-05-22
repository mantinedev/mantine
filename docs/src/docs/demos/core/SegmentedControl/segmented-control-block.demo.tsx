import React from 'react';
import { SegmentedControlWrapper } from './segmented-control-wrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `// By default component is inline
<SegmentedControl />

// Set fullWidth to make it block and take 100% of width
<SegmentedControl fullWidth />`;

export function SegmentedControlBlockDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <>
        <SegmentedControlWrapper />
        <SegmentedControlWrapper fullWidth style={{ marginTop: 15 }} />
      </>
    </CodeDemo>
  );
}
