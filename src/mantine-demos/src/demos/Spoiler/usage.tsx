import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
<Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
  {/* Content here */}
</Spoiler>
`;

function Demo() {
  return <Wrapper />;
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
