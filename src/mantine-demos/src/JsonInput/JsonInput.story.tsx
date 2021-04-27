import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import { JsonInput } from './JsonInput';

function Wrapper() {
  const [value, setValue] = useState('');
  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <JsonInput
        label="Your package.json"
        placeholder="Your package.json"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

storiesOf('@mantine/demos/JsonInput', module)
  .add('General Usage', () => <Wrapper />)
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{
          backgroundColor: DEFAULT_THEME.colors.dark[7],
          height: '100vh',
        }}
      >
        <Wrapper />
      </div>
    </MantineProvider>
  ));
