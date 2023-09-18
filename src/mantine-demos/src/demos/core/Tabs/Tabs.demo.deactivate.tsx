import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" allowTabDeactivation>
      {/* ...content */}
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="chat" allowTabDeactivation>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat" pt="xs">
        Chat panel
      </Tabs.Panel>
      <Tabs.Panel value="gallery" pt="xs">
        Gallery panel
      </Tabs.Panel>
      <Tabs.Panel value="account" pt="xs">
        Account panel
      </Tabs.Panel>
    </Tabs>
  );
}

export const deactivate: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
