import React from 'react';
import { Text, Anchor } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Text, Anchor } from '@mantine/core';

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
      <Text variant="link" component="a" href="https://mantine.dev">Link variant</Text>
      <Anchor href="https://mantine.dev">Same as above Text with link variant</Anchor>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="gray">Gray text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </>
  );
}`;

export function TextBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text weight={500}>Semibold</Text>
      <Text weight={700}>Bold</Text>
      <Text variant="link" component="a" href="https://mantine.dev">
        Link variant
      </Text>
      <br />
      <Anchor href="https://mantine.dev">Same as above Text with link variant</Anchor>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="gray">Gray text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </CodeDemo>
  );
}
