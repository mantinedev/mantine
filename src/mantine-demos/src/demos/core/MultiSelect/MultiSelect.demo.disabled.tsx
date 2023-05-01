import React from 'react';
import { MultiSelect, Box } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { data } from './_data';

const code = `
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect disabled />

      <fieldset disabled>
        <MultiSelect />
      </fieldset>
    </>
  )
}
`;

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <MultiSelect
        data={data}
        label="Disabled without value"
        placeholder="Won't pick anything"
        disabled
        defaultValue={[]}
      />

      <MultiSelect
        mt="md"
        data={data}
        label="Disabled with values"
        placeholder="Won't pick anything"
        disabled
        defaultValue={['react', 'vue']}
      />

      <br />

      <fieldset disabled>
        <MultiSelect
          data={data}
          label="Disabled by fieldset without value"
          placeholder="Won't pick anything"
          defaultValue={[]}
        />

        <MultiSelect
          mt="md"
          data={data}
          label="Disabled by fieldset with values"
          placeholder="Won't pick anything"
          defaultValue={['react', 'vue']}
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
