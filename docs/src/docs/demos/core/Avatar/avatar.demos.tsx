import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Avatar, Group } from '@mantine/core';
import image from './image.png';

function Demo() {
  return (
    <Group position="center">
      <Avatar
        src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
        alt="it's me"
      />
      <Avatar radius="xl" color="lime" />
      <Avatar color="red">VR</Avatar>
      <Avatar color="cyan" radius="xl">
        MK
      </Avatar>
      <Avatar color="blue" radius="xl">
        <StarIcon style={{ width: 24, height: 24 }} />
      </Avatar>
    </Group>
  );
}`;

export function AvatarRootDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
        <Avatar radius="xl" color="lime" />
        <Avatar color="red">VR</Avatar>
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
        <Avatar color="blue" radius="xl">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </Group>
    </CodeDemo>
  );
}

const placeholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar src={null} alt="no image here" color="green" />;
}`;

export function AvatarPlaceholderDemo() {
  return (
    <CodeDemo code={placeholderCode} language="tsx">
      <Group position="center">
        <Avatar src={null} alt="no image here" color="green" />
      </Group>
    </CodeDemo>
  );
}

const iconPlaceholderCode = `import React from 'react';
import { Avatar, Group } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Group position="center">
      <Avatar color="pink">
        <StarIcon />
      </Avatar>
      <Avatar color="blue">
        <StarIcon />
      </Avatar>
      <Avatar color="red">
        <StarIcon />
      </Avatar>
    </Group>
  );
}`;

export function AvatarIconPlaceholderDemo() {
  return (
    <CodeDemo code={iconPlaceholderCode} language="tsx">
      <Group position="center">
        <Avatar color="pink">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="blue">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="red">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </Group>
    </CodeDemo>
  );
}

const lettersPlaceholderCode = `import React from 'react';
import { Avatar, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Avatar color="pink">MK</Avatar>
      <Avatar color="green">YT</Avatar>
      <Avatar color="indigo">VR</Avatar>
    </Group>
  );
}`;

export function AvatarLettersPlaceholderDemo() {
  return (
    <CodeDemo code={lettersPlaceholderCode} language="tsx">
      <Group position="center">
        <Avatar color="pink">MK</Avatar>
        <Avatar color="green">YT</Avatar>
        <Avatar color="indigo">VR</Avatar>
      </Group>
    </CodeDemo>
  );
}
