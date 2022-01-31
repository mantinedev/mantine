import React from 'react';
import { Text, Space } from '@mantine/core';

function Wrapper(props: any) {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First part</Text>
      <Space {...props} />
      <Text>Second part</Text>
    </div>
  );
}

const codeTemplate = (props: string) => `
<Text>First line</Text>
<Space${props} />
<Text>Second line</Text>
`;

export const vertical: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'w', type: 'size', initialValue: 'md', defaultValue: 0 }],
};
