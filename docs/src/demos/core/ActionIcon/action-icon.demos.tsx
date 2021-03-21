import React, { useState } from 'react';
import { ActionIcon, Button, ElementsGroup, PasswordInput } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ActivityLogIcon, SunIcon, MoonIcon } from '@modulz/radix-icons';
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

const variantsCode = `import React from 'react';
import { ActionIcon, ElementsGroup } from '@mantine/core';
import { GearIcon, ChatBubbleIcon, ActivityLogIcon } from '@modulz/radix-icons';

function ActionIconDemo() {
  return (
    <ElementsGroup position="center">
      <ActionIcon variant="transparent">
        <GearIcon />
      </ActionIcon>
      <ActionIcon variant="hover">
        <ChatBubbleIcon />
      </ActionIcon>
      <ActionIcon variant="filled" color="blue">
        <ActivityLogIcon />
      </ActionIcon>
    </ElementsGroup>
  );
}`;

export function ActionIconVariantDemo() {
  return (
    <CodeDemo code={variantsCode} language="tsx">
      <ElementsGroup position="center">
        <ActionIcon variant="transparent">
          <GearIcon />
        </ActionIcon>
        <ActionIcon variant="hover">
          <ChatBubbleIcon />
        </ActionIcon>
        <ActionIcon variant="filled" color="blue">
          <ActivityLogIcon />
        </ActionIcon>
      </ElementsGroup>
    </CodeDemo>
  );
}

const variantsToggleCode = `import React, { useState } from 'react';
import { ActionIcon } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

function ActionIconDemo() {
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
  const [darkTheme, setDarkTheme] = useState(false);
  const title = darkTheme ? 'Light theme' : 'Dark theme';

  return (
    <CodeDemo
      code={variantsToggleCode}
      language="tsx"
      demoBackground={darkTheme ? 'rgb(41, 45, 62)' : '#fff'}
      demoBorder={!darkTheme}
    >
      <ElementsGroup position="center">
        <ActionIcon
          variant={darkTheme ? 'transparent' : 'filled'}
          onClick={() => setDarkTheme((a) => !a)}
          color={darkTheme ? 'yellow' : 'blue'}
          title={title}
          aria-label={title}
        >
          {darkTheme ? <SunIcon /> : <MoonIcon />}
        </ActionIcon>
      </ElementsGroup>
    </CodeDemo>
  );
}

export function ActionIconUsageDemo() {
  return (
    <CodeDemo>
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
