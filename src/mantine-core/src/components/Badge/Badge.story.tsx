import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from '@mantine/storybook';
import { MantineProvider } from '@mantine/styles';
import { Badge } from './Badge';

storiesOf('@mantine/core/Badge', module)
  .add('Styles API', () => (
    <StylesAPIStory
      name="Badge"
      component={Badge}
      props={{ children: 'Badge', rightSection: '$', leftSection: '$' }}
    />
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Badge: { color: 'red', variant: 'filled' } }}>
      <Badge>Default props badge</Badge>
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Badge>Default radius badge</Badge>
    </MantineProvider>
  ));
