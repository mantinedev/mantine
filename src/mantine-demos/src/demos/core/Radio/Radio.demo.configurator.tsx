import React from 'react';
import { RadioProps, Radio, Group } from '@mantine/core';

const codeTemplate = (props: string) => `
import { Radio } from '@mantine/core';

function Demo() {
  return <Radio value="react" label="Radio button" defaultChecked${props} />
}
`;

function Wrapper(props: RadioProps) {
  return (
    <Group position="center">
      <Radio value="react" label="Radio button" defaultChecked {...props} />
    </Group>
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
  ],
};
