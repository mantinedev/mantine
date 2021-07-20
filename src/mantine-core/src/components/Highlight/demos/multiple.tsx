import React from 'react';
import { Highlight } from '../Highlight';

const code = `
<Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
