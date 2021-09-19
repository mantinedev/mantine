import React from 'react';
import { Prism } from '@mantine/prism';
import { LinkTitle } from './LinkTitle';

const code = `
import React from 'react';
import { Prism } from '@mantine/prism';

function Demo() {
  return (
    <>
      <Prism language="tsx" colorScheme="light">{code}</Prism>
      <Prism language="tsx" colorScheme="dark">{code}</Prism>
    </>
  );
}
`.trim();

export function PrismDemo() {
  return (
    <>
      <LinkTitle title="Highlight code with your theme colors" link="/others/prism/" />

      <div style={{ backgroundColor: '#fff', borderRadius: 3 }}>
        <Prism language="tsx" colorScheme="light" style={{ marginTop: 15 }}>
          {code}
        </Prism>
      </div>
      <Prism language="tsx" colorScheme="dark" style={{ marginTop: 15 }}>
        {code}
      </Prism>
    </>
  );
}
