import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
<Tabs>
  <Tabs.Tab label="First" title="Reveal hidden truth on long mouse over">
    First tab content
  </Tabs.Tab>
  <Tabs.Tab label="Not allowed" disabled>
    https://youtu.be/dQw4w9WgXcQ
  </Tabs.Tab>
  <Tabs.Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
    Yes, delete this
  </Tabs.Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs styles={{ body: { paddingTop: 5 } }}>
      <Tabs.Tab label="First" title="Reveal hidden truth on long mouse over">
        First tab content
      </Tabs.Tab>
      <Tabs.Tab label="Not allowed" disabled>
        https://youtu.be/dQw4w9WgXcQ
      </Tabs.Tab>
      <Tabs.Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
        Yes, delete this
      </Tabs.Tab>
    </Tabs>
  );
}

export const tabProps: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
