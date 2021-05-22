import React from 'react';
import { Text } from '@mantine/core';
import { SegmentedControlWrapper } from './segmented-control-wrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `// No transitions
<SegmentedControlWrapper transitionDuration={0} />

// 500ms linear transition
<SegmentedControlWrapper
  transitionDuration={500}
  transitionTimingFunction="linear"
/>
`;

export function SegmentedControlTransitionsDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <Text size="sm" weight={500} style={{ marginBottom: 3 }}>
            No transitions
          </Text>
          <SegmentedControlWrapper transitionDuration={0} />
        </div>
        <div style={{ marginTop: 15 }}>
          <Text size="sm" weight={500} style={{ marginBottom: 3 }}>
            500ms linear transition
          </Text>
          <SegmentedControlWrapper transitionDuration={500} transitionTimingFunction="linear" />
        </div>
      </div>
    </CodeDemo>
  );
}
