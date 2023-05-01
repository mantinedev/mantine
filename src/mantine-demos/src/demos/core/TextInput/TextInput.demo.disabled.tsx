import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TextInput, Box } from '@mantine/core';

const code = `
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput disabled />

      <fieldset disabled>
        <TextInput />
      </fieldset>
    </>
  )
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <TextInput label="Disabled without value" placeholder="Your email" disabled />

      <TextInput
        mt="md"
        label="Disabled with value"
        placeholder="Your email"
        disabled
        value="myemail@gmail.com"
      />

      <br />

      <fieldset disabled>
        <TextInput label="Disabled by fieldset without value" placeholder="Your email" />

        <TextInput
          mt="md"
          label="Disabled by fieldset with value"
          placeholder="Your email"
          value="myemail@gmail.com"
        />
      </fieldset>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
