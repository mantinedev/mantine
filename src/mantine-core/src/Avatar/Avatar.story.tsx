import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from './Avatar';

const image =
  'https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4';

storiesOf('@mantine/core/Avatar', module).add('Avatar', () => (
  <>
    <Avatar size="xs" src={image} />
    <Avatar size="sm" src={image} />
    <Avatar size="md" src={image} />
    <Avatar size="lg" src={image} />
    <Avatar size="xl" src={image} />
    <Avatar size={80} src={image} />
    <Avatar size={70} src={null} />
    <Avatar size={60} src="broken-link" />
    <Avatar size={50} src={image} />
    <Avatar
      size={50}
      src="https://images.unsplash.com/photo-1549772090-bcbf7e7d1775?crop=entropy&cs=srgb&fm=jpg&ixid=MXwyNDF8MHwxfHJhbmRvbXx8fHx8fHx8&ixlib=rb-1.2.1&q=85&dl=unsplash-Bardia%20Boomer.jpg"
      radius="lg"
    />
    <Avatar size={40} src={image} />
    <Avatar size={20} src={image} />
  </>
));
