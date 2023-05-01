import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { YearPickerInput } from '@mantine/dates';
import { Box } from '@mantine/core';

const code = `
import { YearPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <YearPickerInput
        valueFormat="YY"
        label="Disabled"
        placeholder="Pick year"
      />

      <fieldset disabled>
        <YearPickerInput
          valueFormat="YY"
          label="Disabled by fieldset"
          placeholder="Pick year"
        />
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <YearPickerInput
        valueFormat="YY"
        type="multiple"
        label="Disabled"
        placeholder="Pick year"
        disabled
      />

      <br />

      <fieldset disabled>
        <YearPickerInput
          valueFormat="YY"
          type="multiple"
          label="Disabled by fieldset"
          placeholder="Pick year"
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
