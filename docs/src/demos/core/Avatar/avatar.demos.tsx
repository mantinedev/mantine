import React from 'react';
import { Avatar, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Avatar } from '@mantine/core';
import image from './image.png';

export function AvatarDemo() {
  return <Avatar src={image} alt="it's me" />;
}`;

export function AvatarBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />
      </ElementsGroup>
    </CodeDemo>
  );
}

const placeholderCode = `import React from 'react';
import { Avatar } from '@mantine/core';

export function AvatarDemo() {
  return <Avatar src={null} alt="no image here" />;
}`;

export function AvatarPlaceholderDemo() {
  return (
    <CodeDemo code={placeholderCode} language="tsx">
      <ElementsGroup position="center">
        <Avatar src={null} alt="no image here" />
      </ElementsGroup>
    </CodeDemo>
  );
}
