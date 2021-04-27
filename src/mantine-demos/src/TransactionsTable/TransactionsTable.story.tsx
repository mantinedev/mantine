import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import { TransactionsTable } from './TransactionsTable';

storiesOf('@mantine/demos/TransactionsTable', module)
  .add('General usage', () => (
    <div
      style={{
        backgroundColor: DEFAULT_THEME.colors.gray[0],
        display: 'flex',
        padding: '40px 10px',
        justifyContent: 'center',
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: 700 }}>
        <TransactionsTable />
      </div>
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{
          backgroundColor: DEFAULT_THEME.colors.dark[5],
          display: 'flex',
          padding: '40px 10px',
          justifyContent: 'center',
          height: '100vh',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: 700 }}>
          <TransactionsTable />
        </div>
      </div>
    </MantineProvider>
  ));
