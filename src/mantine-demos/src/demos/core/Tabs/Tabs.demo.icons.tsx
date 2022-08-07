import React from 'react';
import { IconSettings, IconMessageCircle, IconCoin } from '@tabler/icons';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconCoin } from '@tabler/icons';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<IconMessageCircle size={14} />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<IconSettings size={14} />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<IconCoin size={14} />} value="money" aria-label="Get money" />
      </Tabs.List>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<IconMessageCircle size={14} />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<IconSettings size={14} />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<IconCoin size={14} />} value="money" aria-label="Get money" />
      </Tabs.List>
    </Tabs>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
