import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DatePickerInput } from '@mantine/dates';
import { Box } from '@mantine/core';

const code = `
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        valueFormat="YYYY MMM DD"
        type="multiple"
        label="Disabled"
        placeholder="Pick date"
      />

      <fieldset disabled>
        <DatePickerInput
          valueFormat="YYYY MMM DD"
          type="multiple"
          label="Disabled by fieldset"
          placeholder="Pick date"
        />
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <DatePickerInput
        valueFormat="YYYY MMM DD"
        type="multiple"
        label="Disabled"
        placeholder="Pick date"
        disabled
      />

      <br />

      <fieldset disabled>
        <DatePickerInput
          valueFormat="YYYY MMM DD"
          type="multiple"
          label="Disabled by fieldset"
          placeholder="Pick date"
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
