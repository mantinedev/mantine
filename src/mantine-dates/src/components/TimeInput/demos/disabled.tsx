import React from 'react';
import { TimeInput } from '../TimeInput';

const code = `
<TimeInput disabled />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" disabled defaultValue={new Date()} />
    </div>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
