import React from 'react';
import { SegmentedControlWrapper } from './segmented-control-wrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const getRadius = (props?: any) =>
  ['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size="lg" radius={size} {...props} />
    </div>
  ));

export function SegmentedControlRadiusDemo() {
  return <CodeDemo>{getRadius()}</CodeDemo>;
}
