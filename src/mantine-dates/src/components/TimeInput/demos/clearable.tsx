import React from 'react';
import { TimeInput } from '../TimeInput';

const code = `
<TimeInput clearable />
<TimeInput />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="With a clear button" clearable defaultValue={new Date()} />
      <TimeInput label="Without a clear button" defaultValue={new Date()} />
    </div>
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
