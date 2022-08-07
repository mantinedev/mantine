import React from 'react';
import { IconClock } from '@tabler/icons';
import { TimeInput } from '@mantine/dates';

const code = `
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons';

function Demo() {
  return (
    <TimeInput
      label="Pick time"
      placeholder="Pick time"
      icon={<IconClock size={16} />}
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
        icon={<IconClock size={16} />}
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
