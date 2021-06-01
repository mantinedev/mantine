import React from 'react';
import { Tabs, Tab } from '../Tabs';

const code = `
<Tabs color="teal">
  <Tab label="Teal tab">Teal tab content</Tab>
  <Tab label="Still teal">Teal tab #2</Tab>
  <Tab label="Pink tab" color="pink">
    Pink tab content
  </Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs color="teal">
      <Tab label="Teal tab">Teal tab content</Tab>
      <Tab label="Still teal">Teal tab #2</Tab>
      <Tab label="Pink tab" color="pink">
        Pink tab content
      </Tab>
    </Tabs>
  );
}

export const colors: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
