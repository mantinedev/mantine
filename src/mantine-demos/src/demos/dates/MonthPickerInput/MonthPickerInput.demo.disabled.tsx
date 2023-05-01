import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { MonthPickerInput } from '@mantine/dates';
import { Box } from '@mantine/core';

const code = `
import { MonthPickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <MonthPickerInput
        valueFormat="YYYY MMM"
        type="multiple"
        label="Disabled"
        placeholder="Pick month"
        disabled
      />

      <fieldset disabled>
        <MonthPickerInput
          valueFormat="YYYY MMM"
          type="multiple"
          label="Disabled by fieldset"
          placeholder="Pick month"
        />
      </fieldset>
    </>

  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <MonthPickerInput
        valueFormat="YYYY MMM"
        type="multiple"
        label="Disabled"
        placeholder="Pick month"
        disabled
      />

      <br />

      <fieldset disabled>
        <MonthPickerInput
          valueFormat="YYYY MMM"
          type="multiple"
          label="Disabled by fieldset"
          placeholder="Pick month"
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
