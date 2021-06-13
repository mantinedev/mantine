import React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { Group, Title, Anchor } from '@mantine/core';
import { Prism } from '@mantine/prism';

const code = `
import React from 'react';
import { Prism } from '@mantine/prism';

function Demo() {
  return (
    <>
      <Prism language="tsx">{code}</Prism>
      <Prism language="tsx" themeOverride={{ colorScheme: 'dark' }}>{code}</Prism>
    </>
  );
}
`.trim();

export function PrismDemo() {
  return (
    <>
      <Group position="apart" spacing={0}>
        <Title order={3}>Highlight code with your theme colors</Title>
        <Anchor component={Link} to="/others/prism/">
          Get started <ArrowRightIcon style={{ width: 12, height: 12 }} />
        </Anchor>
      </Group>

      <Prism language="tsx" style={{ marginTop: 25 }}>
        {code}
      </Prism>
      <Prism language="tsx" themeOverride={{ colorScheme: 'dark' }} style={{ marginTop: 25 }}>
        {code}
      </Prism>
    </>
  );
}
