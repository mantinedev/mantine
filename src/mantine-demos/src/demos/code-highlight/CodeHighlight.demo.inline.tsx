import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

const code = `
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code="import React from 'react';" language="tsx" />. Is not that cool?
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight code="import React from 'react';" language="tsx" />. Is not that cool?
    </Text>
  );
}

export const inline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
