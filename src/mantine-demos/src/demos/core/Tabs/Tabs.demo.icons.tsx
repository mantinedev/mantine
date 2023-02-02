import React from 'react';
import { IconSettings, IconMessageCircle, IconCoin } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Tabs } from '@mantine/core';

const code = `
import { Tabs } from '@mantine/core';
import { IconSettings, IconMessageCircle, IconCoin } from '@tabler/icons-react';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<IconMessageCircle size="0.8rem" />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<IconSettings size="0.8rem" />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<IconCoin size="0.8rem" />} value="money" aria-label="Get money" />
      </Tabs.List>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab icon={<IconMessageCircle size="0.8rem" />} value="chat">
          Chat
        </Tabs.Tab>
        <Tabs.Tab icon={<IconSettings size="0.8rem" />} value="settings">
          Settings
        </Tabs.Tab>
        <Tabs.Tab icon={<IconCoin size="0.8rem" />} value="money" aria-label="Get money" />
      </Tabs.List>
    </Tabs>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
