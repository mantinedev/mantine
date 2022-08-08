import React from 'react';
import { Text } from '@mantine/core';

const code = `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text weight={500}>Semibold</Text>
      <Text weight={700}>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underlined</Text>
      <Text strikethrough>Strikethrough</Text>
      <Text variant="link" component="a" href="https://mantine.dev">Link variant</Text>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="teal">Teal text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text weight={500}>Semibold</Text>
      <Text weight={700}>Bold</Text>
      <Text italic>Italic</Text>
      <Text underline>Underlined</Text>
      <Text strikethrough>Strikethrough</Text>
      <Text variant="link" component="a" href="https://mantine.dev">
        Link variant
      </Text>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="teal">Teal text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
