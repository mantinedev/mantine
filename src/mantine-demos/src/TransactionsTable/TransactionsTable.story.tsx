import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import TransactionsTable from './TransactionsTable';

storiesOf('@mantine/demos', module).add('TransactionsTable', () => (
  <MantineProvider>
    <div
      style={{
        backgroundColor: DEFAULT_THEME.colors.gray[0],
        display: 'flex',
        padding: '40px 10px',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div style={{ width: 640 }}>
        <TransactionsTable />
      </div>
    </div>
  </MantineProvider>
));
