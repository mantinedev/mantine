import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from '@mantine/storybook';
import { MantineProvider } from '@mantine/styles';
import { Avatar } from './Avatar';

storiesOf('Avatar', module)
  .add('Styles API', () => <StylesAPIStory name="Avatar" component={Avatar} props={{}} />)
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Avatar: { color: 'cyan' } }}>
      <Avatar>MJ</Avatar>
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Avatar>MJ</Avatar>
    </MantineProvider>
  ));
