import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import { MixerHorizontalIcon, ChatBubbleIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import { MixerHorizontalIcon, ChatBubbleIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Tabs>
      <Tab label="Chat" icon={<ChatBubbleIcon />}>Chat here</Tab>
      <Tab label="Settings" icon={<MixerHorizontalIcon />}>Settings</Tab>
      <Tab icon="$">Get money!</Tab>
    </Tabs>
  );
}`;

export function TabsIconDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Tabs>
        <Tab label="Chat" icon={<ChatBubbleIcon />}>
          Chat here
        </Tab>
        <Tab label="Settings" icon={<MixerHorizontalIcon />}>
          Settings
        </Tab>
        <Tab icon="$">Get money!</Tab>
      </Tabs>
    </CodeDemo>
  );
}
