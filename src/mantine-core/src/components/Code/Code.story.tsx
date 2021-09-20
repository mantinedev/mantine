import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/tss';
import { Code } from './Code';

const getThemes = (props: any = {}) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <div key={color} style={{ padding: 5 }}>
      <Code color={color} {...props}>
        {props.children || 'React.createElement();'}
      </Code>
    </div>
  ));

const block = `import React from 'react';
import { Avatar } from '@mantine/core';
import image from './image.png';

export function AvatarDemo() {
  return <Avatar src={image} alt="it's me" />;
}`;

storiesOf('@mantine/core/Code', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes()}</div>)
  .add('Block', () => (
    <div style={{ padding: 15 }}>{getThemes({ block: true, children: block })}</div>
  ));
