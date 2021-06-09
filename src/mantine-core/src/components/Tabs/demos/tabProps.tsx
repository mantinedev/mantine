import React from 'react';
import { Tabs, Tab } from '../Tabs';

const code = `
<Tabs>
  <Tab label="First" title="Reveal hidden truth on long mouse over">
    First tab content
  </Tab>
  <Tab label="Not allowed" disabled>
    https://youtu.be/dQw4w9WgXcQ
  </Tab>
  <Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
    Yes, delete this
  </Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs styles={{ body: { paddingTop: 5 } }}>
      <Tab label="First" title="Reveal hidden truth on long mouse over">
        First tab content
      </Tab>
      <Tab label="Not allowed" disabled>
        https://youtu.be/dQw4w9WgXcQ
      </Tab>
      <Tab label="Delete this?" color="red" style={{ fontWeight: 500 }}>
        Yes, delete this
      </Tab>
    </Tabs>
  );
}

export const tabProps: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
