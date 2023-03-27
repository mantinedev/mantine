import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Mark, MarkProps, Text } from '@mantine/core';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const codeTemplate = (props: string) => `
import { Text, Mark } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark${props}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'color', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' }],
};
