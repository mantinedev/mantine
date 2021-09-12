import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const code = `
`;

function Demo() {
  const [value, onChange] = useState('');
  return <SSRWrapper value={value} onChange={onChange} />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
