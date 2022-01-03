import React from 'react';
import { TimeInput } from '../TimeInput';

const code = `
<TimeInput format="12" />
<TimeInput format="24" />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" format="12" defaultValue={new Date()} />
      <TimeInput label="Pick time" format="24" defaultValue={new Date()} />
    </div>
  );
}

export const format: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
