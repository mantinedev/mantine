import React from 'react';
import { MantineProvider } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <DatePicker
        label="Date format: MMMM DD, YYYY"
        placeholder="MMMM DD, YYYY"
        defaultValue={new Date()}
      />

      <MantineProvider inherit theme={{ dateFormat: 'MM/DD/YYYY' }}>
        <DatePicker
          mt="sm"
          label="Date format: MM/DD/YYYY"
          placeholder="'MM/DD/YYYY"
          defaultValue={new Date()}
        />
      </MantineProvider>

      <MantineProvider inherit theme={{ dateFormat: 'DD.MM.YYYY' }}>
        <DatePicker
          mt="sm"
          label="Date format: DD.MM.YYYY"
          placeholder="'DD.MM.YYYY"
          defaultValue={new Date()}
        />
      </MantineProvider>
    </div>
  );
}

export const dateFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
};
