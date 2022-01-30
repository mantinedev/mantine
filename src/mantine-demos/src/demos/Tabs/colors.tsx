import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
<Tabs color="teal">
  <Tabs.Tab label="Teal tab">Teal tab content</Tabs.Tab>
  <Tabs.Tab label="Still teal">Teal tab #2</Tabs.Tab>
  <Tabs.Tab label="Pink tab" color="pink">
    Pink tab content
  </Tabs.Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs color="teal" styles={{ body: { paddingTop: 5 } }}>
      <Tabs.Tab label="Teal tab">Teal tab content</Tabs.Tab>
      <Tabs.Tab label="Still teal">Teal tab #2</Tabs.Tab>
      <Tabs.Tab label="Pink tab" color="pink">
        Pink tab content
      </Tabs.Tab>
    </Tabs>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
