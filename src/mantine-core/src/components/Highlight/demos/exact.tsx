import React from 'react';
import { Highlight } from '../Highlight';

const code = `
<Highlight highlight="light" exact>Highlight this light and not those lights</Highlight>
`;

function Demo() {
  return <Highlight highlight="light" exact>Highlight this light and not those lights</Highlight>;
}

export const exact: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
