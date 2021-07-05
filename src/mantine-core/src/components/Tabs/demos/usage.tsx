import React from 'react';
import { Tabs, Tab } from '../Tabs';

const code = `
<Tabs>
  <Tab label="First">First tab content</Tab>
  <Tab label="Second">Second tab content</Tab>
  <Tab label="Third">Third tab content</Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs styles={{ body: { paddingTop: 5 } }}>
      <Tab label="First">First tab content</Tab>
      <Tab label="Second">Second tab content</Tab>
      <Tab label="Third">Third tab content</Tab>
    </Tabs>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
