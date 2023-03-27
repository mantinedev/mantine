import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Blockquote, BlockquoteProps, Box } from '@mantine/core';

function Wrapper(props: BlockquoteProps) {
  return (
    <Box maw={400} mx="auto">
      <Blockquote {...props} />
    </Box>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Blockquote } from '@mantine/core';

function Demo() {
  return (
    <Blockquote${props}>
      ${children}
    </Blockquote>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'gray', defaultValue: 'gray' },
    { name: 'cite', type: 'string', initialValue: '– Forrest Gump' },
    {
      name: 'children',
      type: 'string',
      initialValue: 'Life is like an npm install – you never know what you are going to get.',
    },
  ],
};
