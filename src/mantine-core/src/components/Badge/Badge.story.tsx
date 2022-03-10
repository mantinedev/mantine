import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Badge } from './Badge';

storiesOf('@mantine/core/Badge/stories', module)
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
