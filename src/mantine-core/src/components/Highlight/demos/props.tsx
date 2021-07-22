import React from 'react';
import { Highlight } from '../Highlight';

const code = `
<Highlight
  component="a"
  href="https://mantine.dev"
  target="_blank"
  highlight="mantine"
  variant="link"
  weight={500}
>
  Mantine website
</Highlight>
`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      variant="link"
      weight={500}
    >
      Mantine website
    </Highlight>
  );
}

export const props: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
