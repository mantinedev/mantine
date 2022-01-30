import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
<DatePicker allowLevelChange={false} />
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="No level change" label="Event date" allowLevelChange={false} />
    </div>
  );
}

export const noLevel: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
