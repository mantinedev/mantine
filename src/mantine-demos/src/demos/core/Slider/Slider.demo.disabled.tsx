import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Slider, RangeSlider, Box } from '@mantine/core';

const code = `
import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />

      <fieldset disabled>
        <Slider defaultValue={60} />
        <RangeSlider
          defaultValue={[25, 75]}
          marks={[
            { value: 0, label: 'xs' },
            { value: 25, label: 'sm' },
            { value: 50, label: 'md' },
            { value: 75, label: 'lg' },
            { value: 100, label: 'xl' },
          ]}
        />
      </fieldset>
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={400} mx="auto">
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />

      <br />

      <fieldset disabled>
        <Slider defaultValue={60} />
        <RangeSlider
          mt="xl"
          mb="xl"
          defaultValue={[25, 75]}
          marks={[
            { value: 0, label: 'xs' },
            { value: 25, label: 'sm' },
            { value: 50, label: 'md' },
            { value: 75, label: 'lg' },
            { value: 100, label: 'xl' },
          ]}
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
