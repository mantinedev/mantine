import React from 'react';
import { Input } from '../Input';

const code = `
<Input placeholder="Default variant" />
<Input variant="filled" placeholder="Filled variant" />
<Input variant="unstyled" placeholder="Unstyled variant" />
`;

function Demo() {
  return (
    <>
      <Input placeholder="Default variant" />
      <Input style={{ marginTop: 15 }} variant="filled" placeholder="Filled variant" />
      <Input style={{ marginTop: 15 }} variant="unstyled" placeholder="Unstyled variant" />
    </>
  );
}

export const variants: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
