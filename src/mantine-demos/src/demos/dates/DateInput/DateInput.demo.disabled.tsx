import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput } from '@mantine/dates';
import { Box } from '@mantine/core';

const code = `
import { DateInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <>
      <DateInput
      label="Disabled"
      placeholder="Date input"
      {/* ...other props */} />

      <fieldset disabled>
        <DateInput
        label="Disabled by fieldset"
        placeholder="Date input"
        {/* ...other props */} />
      </fieldset>
    </>
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Box maw={320} mx="auto">
      <DateInput
        value={value}
        onChange={setValue}
        label="Disabled"
        placeholder="Date input"
        disabled
      />

      <br />

      <fieldset disabled>
        <DateInput
          value={value}
          onChange={setValue}
          label="Disabled by fieldset"
          placeholder="Date input"
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
