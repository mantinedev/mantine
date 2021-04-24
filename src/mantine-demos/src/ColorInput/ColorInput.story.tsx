import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useMantineTheme, MantineProvider, DEFAULT_THEME } from '@mantine/theme';
import { ColorInput } from './ColorInput';

function Wrapper() {
  const theme = useMantineTheme();
  const [value, setValue] = useState('');
  const colors = Object.keys(theme.colors).map((color) => theme.colors[color][6]);

  return (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        value={value}
        onChange={setValue}
        data={colors}
      />
    </div>
  );
}

storiesOf('@mantine/demos/ColorInput', module)
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
