import React, { useState } from 'react';
import { ActionIcon, Button, Group, PasswordInput, useMantineTheme } from '@mantine/core';
import {
  GearIcon,
  ChatBubbleIcon,
  ActivityLogIcon,
  SunIcon,
  MoonIcon,
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

const variantsToggleCode = `import React, { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

function Demo() {
  const [darkTheme, setDarkTheme] = useState(false);
  const title = darkTheme ? 'Light theme' : 'Dark theme';

  return (
    <ActionIcon
      variant={darkTheme ? 'transparent' : 'filled'}
      onClick={() => setDarkTheme((a) => !a)}
      color={darkTheme ? 'yellow' : 'blue'}
      title={title}
      aria-label={title}
    >
      {darkTheme ? <SunIcon /> : <MoonIcon />}
    </ActionIcon>
  );
}`;

export function ActionIconVariantToggleDemo() {
  const theme = useMantineTheme();
  const [darkTheme, setDarkTheme] = useState(theme.colorScheme === 'dark');
  const title = darkTheme ? 'Light theme' : 'Dark theme';

  return (
    <CodeDemo
      code={variantsToggleCode}
      language="tsx"
      demoBackground={darkTheme ? theme.colors.dark[7] : '#fff'}
    >
      <Group position="center">
        <ActionIcon
          variant={darkTheme ? 'transparent' : 'filled'}
          onClick={() => setDarkTheme((a) => !a)}
          color={darkTheme ? 'yellow' : 'blue'}
          title={title}
          aria-label={title}
        >
          {darkTheme ? <SunIcon /> : <MoonIcon />}
        </ActionIcon>
      </Group>
    </CodeDemo>
  );
}

export function ActionIconUsageDemo() {
  const theme = useMantineTheme();

  return (
    <CodeDemo demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white}>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <PasswordInput
          placeholder="Password"
          hidePasswordLabel="Hide password"
          showPasswordLabel="Show password"
        />
      </div>
    </CodeDemo>
  );
}
