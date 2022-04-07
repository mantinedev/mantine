import React from 'react';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">First tab content</Tabs.Panel>
      <Tabs.Panel value="second" pt="xs">Second tab content</Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">Third tab content</Tabs.Panel>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="first" pt="xs">
        First tab content
      </Tabs.Panel>
      <Tabs.Panel value="second" pt="xs">
        Second tab content
      </Tabs.Panel>
      <Tabs.Panel value="third" pt="xs">
        Third tab content
      </Tabs.Panel>
    </Tabs>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
