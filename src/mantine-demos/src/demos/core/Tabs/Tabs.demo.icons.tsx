import React from 'react';
import { Settings, MessageCircle, Coin } from 'tabler-icons-react';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';
import { Settings, MessageCircle, Coin } from 'tabler-icons-react';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<MessageCircle size={14} />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<Settings size={14} />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<Coin size={14} />} value="money" />
      </Tabs.List>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<MessageCircle size={14} />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<Settings size={14} />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<Coin size={14} />} value="money" />
      </Tabs.List>
    </Tabs>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
