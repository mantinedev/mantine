import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker allowLevelChange={false} placeholder="No level change" label="Event date" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        allowLevelChange={false}
        placeholder="No level change"
        label="Event date"
        withinPortal
      />
    </div>
  );
}

export const noLevel: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
