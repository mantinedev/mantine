import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, Kbd } from '@mantine/core';

storiesOf('@mantine/core/Kbd/styles-api', module)
  .add('With sx', () => (
    <div style={{ padding: 40 }}>
      <Kbd sx={{ backgroundColor: 'red', border: '1px solid blue', color: 'white' }}>Shift</Kbd>
    </div>
  ))
  .add('Styles API on MantineProvider', () => (
    <MantineProvider
      styles={{
        Kbd: () => ({ root: { backgroundColor: 'red', border: '1px solid blue', color: 'white' } }),
      }}
    >
      <div style={{ padding: 40 }}>
        <Kbd>Shift</Kbd>
      </div>
    </MantineProvider>
  ));
