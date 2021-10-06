import React from 'react';
import { Text, Space } from '../../../index';

function Wrapper(props: any) {
  return (
    <>
      <Text>First line</Text>
      <Space {...props} />
      <Text>Second line</Text>
    </>
  );
}

const codeTemplate = (props: string) => `
<Text>First line</Text>
<Space${props} />
<Text>Second line</Text>
`;

export const horizontal: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'h', type: 'size', initialValue: 'md', defaultValue: 0 }],
};
