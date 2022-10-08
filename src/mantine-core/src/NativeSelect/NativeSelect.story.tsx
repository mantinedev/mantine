import React from 'react';
import { MantineProvider } from '@mantine/styles';
import { NativeSelect } from './NativeSelect';

export default { title: 'NativeSelect' };

const data = ['React', 'Angular', 'Vue', 'Svelte'];

export function CursorPointer() {
  return (
    <MantineProvider theme={{ cursorType: 'pointer' }}>
      <NativeSelect data={data} />
    </MantineProvider>
  );
}
