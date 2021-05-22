import React from 'react';
import { SegmentedControlWrapper } from './segmented-control-wrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getSizes = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size={size} {...props} />
    </div>
  ));

export function SegmentedControlSizesDemo() {
  return <CodeDemo>{getSizes()}</CodeDemo>;
}
