import React from 'react';
import { Prism } from '@mantine/prism';
import { LinkTitle } from './LinkTitle';

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
      <LinkTitle title="Highlight code with your theme colors" link="/others/prism/" />

      <Prism language="tsx" style={{ marginTop: 15 }}>
        {code}
      </Prism>
      <Prism language="tsx" themeOverride={{ colorScheme: 'dark' }} style={{ marginTop: 15 }}>
        {code}
      </Prism>
    </>
  );
}
