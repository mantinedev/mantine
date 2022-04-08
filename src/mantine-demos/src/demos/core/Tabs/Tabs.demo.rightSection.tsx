import React from 'react';
import { Tabs, Badge } from '@mantine/core';

const code = `
import { Tabs, Badge } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab
          rightSection={
            <Badge
              sx={{ width: 16, height: 16, pointerEvents: 'none' }}
              variant="filled"
              size="xs"
              p={0}
            >
              6
            </Badge>
          }
          value="chat"
        >
          Chat
        </Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="money">Gallery</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab
          rightSection={
            <Badge
              sx={{ width: 16, height: 16, pointerEvents: 'none' }}
              variant="filled"
              size="xs"
              p={0}
            >
              6
            </Badge>
          }
          value="chat"
        >
          Chat
        </Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="money">Gallery</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export const rightSection: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
