import React from 'react';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput clearable defaultValue={new Date()} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="With a clear button" clearable defaultValue={new Date()} />
    </div>
  );
}

export const clearable: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
