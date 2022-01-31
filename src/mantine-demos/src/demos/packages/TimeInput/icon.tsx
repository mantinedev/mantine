import React from 'react';
import { ClockIcon } from '@modulz/radix-icons';
import { TimeInput } from '@mantine/dates';

const code = `
<TimeInput icon={<ClockIcon />} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput
        label="Pick time"
        placeholder="Pick time"
        icon={<ClockIcon />}
        defaultValue={new Date()}
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
