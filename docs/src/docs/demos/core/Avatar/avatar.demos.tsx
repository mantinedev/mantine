import React from 'react';
import { Avatar, ElementsGroup } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Avatar, ElementsGroup } from '@mantine/core';
import image from './image.png';

function Demo() {
  return (
    <ElementsGroup position="center">
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
    </ElementsGroup>
  );
}`;

export function AvatarRootDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
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
      </ElementsGroup>
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
      <ElementsGroup position="center">
        <Avatar src={null} alt="no image here" color="green" />
      </ElementsGroup>
    </CodeDemo>
  );
}

const iconPlaceholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <ElementsGroup position="center">
      <Avatar color="pink">
        <StarIcon />
      </Avatar>
      <Avatar color="blue">
        <StarIcon />
      </Avatar>
      <Avatar color="red">
        <StarIcon />
      </Avatar>
    </ElementsGroup>
  );
}`;

export function AvatarIconPlaceholderDemo() {
  return (
    <CodeDemo code={iconPlaceholderCode} language="tsx">
      <ElementsGroup position="center">
        <Avatar color="pink">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="blue">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
        <Avatar color="red">
          <StarIcon style={{ width: 24, height: 24 }} />
        </Avatar>
      </ElementsGroup>
    </CodeDemo>
  );
}

const lettersPlaceholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';
import { StarIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <ElementsGroup position="center">
      <Avatar color="pink">MK</Avatar>
      <Avatar color="green">YT</Avatar>
      <Avatar color="indigo">VR</Avatar>
    </ElementsGroup>
  );
}`;

export function AvatarLettersPlaceholderDemo() {
  return (
    <CodeDemo code={lettersPlaceholderCode} language="tsx">
      <ElementsGroup position="center">
        <Avatar color="pink">MK</Avatar>
        <Avatar color="green">YT</Avatar>
        <Avatar color="indigo">VR</Avatar>
      </ElementsGroup>
    </CodeDemo>
  );
}
