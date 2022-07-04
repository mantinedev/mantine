import React from 'react';
import { Clock } from 'tabler-icons-react';
import { TimeInput } from '@mantine/dates';

const code = `
import { TimeInput } from '@mantine/dates';
import { Clock } from 'tabler-icons-react';

function Demo() {
  return (
    <TimeInput
      label="Pick time"
      placeholder="Pick time"
      icon={<Clock size={16} />}
      defaultValue={new Date()}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput
        label="Pick time"
        placeholder="Pick time"
        icon={<Clock size={16} />}
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
