import React from 'react';
import { ActionIcon, Button, ElementsGroup } from '@mantine/core';
import { GearIcon, ChatBubbleIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { ActionIcon } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';

function ActionIconDemo() {
  return (
    <ActionIcon
      title="Settings"
      aria-label="Settings"
      onClick={() => console.log('Do something')}
    >
      <GearIcon />
    </ActionIcon>
  );
}`;

export function ActionIconBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <ActionIcon title="Settings" aria-label="Settings">
          <GearIcon />
        </ActionIcon>
      </ElementsGroup>
    </CodeDemo>
  );
}

const groupCode = `import React from 'react';
import { ActionIcon, Button, ElementsGroup } from '@mantine/core';
import { GearIcon, ChatBubbleIcon } from '@modulz/radix-icons';

function ActionIconDemo() {
  return (
    <ElementsGroup position="center">
      <Button>Submit</Button>

      <ActionIcon title="Settings" aria-label="Settings">
        <GearIcon />
      </ActionIcon>

      <ActionIcon title="Chat" aria-label="Chat">
        <ChatBubbleIcon />
      </ActionIcon>
    </ElementsGroup>
  );
}`;

export function ActionIconGroupDemo() {
  return (
    <CodeDemo code={groupCode} language="tsx">
      <ElementsGroup position="center">
        <Button>Submit</Button>

        <ActionIcon title="Settings" aria-label="Settings">
          <GearIcon />
        </ActionIcon>

        <ActionIcon title="Chat" aria-label="Chat">
          <ChatBubbleIcon />
        </ActionIcon>
      </ElementsGroup>
    </CodeDemo>
  );
}
