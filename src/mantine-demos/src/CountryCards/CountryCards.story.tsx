import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import { CountryCards } from './CountryCards';

storiesOf('@mantine/demos/CountryCards', module)
  .add('General Usage', () => <CountryCards />)
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{
          backgroundColor: DEFAULT_THEME.colors.dark[7],
          height: '100vh',
        }}
      >
        <CountryCards />
      </div>
    </MantineProvider>
  ));
