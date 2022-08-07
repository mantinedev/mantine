import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { Switch } from './Switch';

export default { title: 'Switch' };

export function CursorPointer() {
  return (
    <MantineProvider theme={{ cursorType: 'pointer' }}>
      <Switch label="Hello" value="1" />
    </MantineProvider>
  );
}
