import React from 'react';
import { MixerHorizontalIcon, ChatBubbleIcon } from '@modulz/radix-icons';
import { Tabs } from '@mantine/core';

const code = `
<Tabs>
  <Tabs.Tab label="Chat" icon={<ChatBubbleIcon />}>Chat here</Tabs.Tab>
  <Tabs.Tab label="Settings" icon={<MixerHorizontalIcon />}>Settings</Tabs.Tab>
  <Tabs.Tab icon="$">Get money!</Tabs.Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs styles={{ body: { paddingTop: 5 } }}>
      <Tabs.Tab label="Chat" icon={<ChatBubbleIcon />}>
        Chat here
      </Tabs.Tab>
      <Tabs.Tab label="Settings" icon={<MixerHorizontalIcon />}>
        Settings
      </Tabs.Tab>
      <Tabs.Tab icon="$">Get money!</Tabs.Tab>
    </Tabs>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
