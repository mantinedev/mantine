import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateTimePicker } from '@mantine/dates';
import { Box } from '@mantine/core';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DateTimePicker
        label="Disabled"
        placeholder="Pick date and time"
      />

      <fieldset disabled>
        <DateTimePicker
          label="Disabled by fieldset"
          placeholder="Pick date and time"
        />
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <DateTimePicker
        label="Disabled"
        placeholder="Pick date and time"
        popoverProps={{ withinPortal: true }}
        disabled
      />

      <br />

      <fieldset disabled>
        <DateTimePicker
          label="Disabled by fieldset"
          placeholder="Pick date and time"
          popoverProps={{ withinPortal: true }}
        />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
