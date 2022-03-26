import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { ActionIcon } from './ActionIcon';

storiesOf('@mantine/core/ActionIcon/stories', module)
  .add('Default radius on theme', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </MantineProvider>
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ ActionIcon: { color: 'blue', radius: 'xl' } }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </MantineProvider>
  ));
