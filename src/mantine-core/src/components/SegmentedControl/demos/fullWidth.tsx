import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';
import { SegmentedControlProps } from '..';

function Demo(props: SegmentedControlProps) {
  return (
    <>
      <SegmentedControlWrapper {...props} />
    </>
  );
}

const codeTemplate = (props: string) => `
  <SegmentedControl ${props} />
`;

export const fullWidth: MantineDemo = {
  type: 'configurator',
  component: Demo,
  codeTemplate,
  configurator: [
    { name: 'fullWidth', type: 'boolean', defaultValue: false },
    {
      name: 'orientation',
      type: 'segmented',
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
    },
  ],
};
