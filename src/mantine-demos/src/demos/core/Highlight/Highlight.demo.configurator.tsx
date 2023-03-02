import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Highlight, HighlightProps } from '@mantine/core';

function Wrapper(props: HighlightProps) {
  return <Highlight maw={400} mx="auto" {...props} />;
}

const codeTemplate = (props: string, children: string) => `
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight${props}>
      ${children}
    </Highlight>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'highlightColor', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' },
    { name: 'highlight', type: 'string', initialValue: 'this' },
    {
      name: 'children',
      type: 'string',
      initialValue: 'Highlight This, definitely THIS and also this!',
    },
  ],
};
