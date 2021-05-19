import React from 'react';
import { ActionIcon, Button, Group, PasswordInput, useMantineTheme } from '@mantine/core';
import {
  GearIcon,
  ChatBubbleIcon,
  ActivityLogIcon,
  CheckIcon,
  ImageIcon,
} from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const groupCode = `import React from 'react';
import { ActionIcon, Button, Group } from '@mantine/core';
import { GearIcon, ChatBubbleIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Group position="center">
      <Button>Submit</Button>

      <ActionIcon title="Settings" aria-label="Settings">
        <GearIcon />
      </ActionIcon>

      <ActionIcon title="Chat" aria-label="Chat">
        <ChatBubbleIcon />
      </ActionIcon>
    </Group>
  );
}`;

export function ActionIconGroupDemo() {
  return (
    <CodeDemo code={groupCode} language="tsx">
      <Group position="center">
        <Button>Submit</Button>

        <ActionIcon title="Settings" aria-label="Settings">
          <GearIcon />
        </ActionIcon>

        <ActionIcon title="Chat" aria-label="Chat">
          <ChatBubbleIcon />
        </ActionIcon>
      </Group>
    </CodeDemo>
  );
}

const variantsCode = `import React from 'react';
import { ActionIcon, Group } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ActivityLogIcon, CheckIcon, ImageIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Group position="center">
      <ActionIcon variant="transparent"><GearIcon /></ActionIcon>
      <ActionIcon variant="hover"><ChatBubbleIcon /></ActionIcon>
      <ActionIcon variant="filled" color="blue"><ActivityLogIcon /></ActionIcon>
      <ActionIcon variant="light" color="pink"><ImageIcon /></ActionIcon>
      <ActionIcon variant="outline" color="teal"><CheckIcon /></ActionIcon>
    </Group>
  );
}`;

export function ActionIconVariantDemo() {
  return (
    <CodeDemo code={variantsCode} language="tsx">
      <Group position="center">
        <ActionIcon variant="transparent">
          <GearIcon />
        </ActionIcon>
        <ActionIcon variant="hover">
          <ChatBubbleIcon />
        </ActionIcon>
        <ActionIcon variant="filled" color="blue">
          <ActivityLogIcon />
        </ActionIcon>
        <ActionIcon variant="light" color="pink">
          <ImageIcon />
        </ActionIcon>
        <ActionIcon variant="outline" color="teal">
          <CheckIcon />
        </ActionIcon>
      </Group>
    </CodeDemo>
  );
}

export function ActionIconUsageDemo() {
  const theme = useMantineTheme();
  return (
    <CodeDemo>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <PasswordInput
          placeholder="Password"
          hidePasswordLabel="Hide password"
          showPasswordLabel="Show password"
          variant={theme.colorScheme === 'dark' ? 'filled' : 'default'}
        />
      </div>
    </CodeDemo>
  );
}
