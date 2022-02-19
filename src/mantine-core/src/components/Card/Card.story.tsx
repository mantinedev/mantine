import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Card } from './Card';

storiesOf('@mantine/core/Card/stories', module)
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Card: { shadow: 'xl', padding: 0, withBorder: true } }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Default props card
      </Card>
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 'xl' }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50} withBorder>
        Default radius card
      </Card>
    </MantineProvider>
  ));
