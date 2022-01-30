import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
<Tabs variant="outline">
  <Tabs.Tab label="First">First tab content</Tabs.Tab>
  <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
  <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs variant="outline" styles={{ body: { paddingTop: 5 } }}>
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}

export const outline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
