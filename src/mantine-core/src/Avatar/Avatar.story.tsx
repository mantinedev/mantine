import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import { ElementsGroup } from '../ElementsGroup/ElementsGroup';
import { Avatar } from './Avatar';

const image =
  'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';

storiesOf('@mantine/core', module).add('Avatar', () => (
  <MantineProvider>
    <ElementsGroup>
      <Avatar size={80} src={image} />
      <Avatar size={70} src={null} />
      <Avatar size={60} src="broken-link" />
      <Avatar size={50} src={image} />
      <Avatar size={40} src={image} />
      <Avatar size={20} src={image} />
    </ElementsGroup>
  </MantineProvider>
));
