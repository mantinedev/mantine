import React from 'react';
import { MixerHorizontalIcon, ChatBubbleIcon } from '@modulz/radix-icons';
import { Tabs, Tab } from '../index';

const code = `
<Tabs>
  <Tab label="Chat" icon={<ChatBubbleIcon />}>Chat here</Tab>
  <Tab label="Settings" icon={<MixerHorizontalIcon />}>Settings</Tab>
  <Tab icon="$">Get money!</Tab>
</Tabs>
`;

function Demo() {
  return (
    <Tabs styles={{ body: { paddingTop: 5 } }}>
      <Tab label="Chat" icon={<ChatBubbleIcon />}>
        Chat here
      </Tab>
      <Tab label="Settings" icon={<MixerHorizontalIcon />}>
        Settings
      </Tab>
      <Tab icon="$">Get money!</Tab>
    </Tabs>
  );
}

export const icons: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
