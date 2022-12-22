import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { YearPicker, YearPickerProps } from '@mantine/dates';

const codeTemplate = (props: string) => `
import { YearPicker } from '@mantine/dates';

function Demo() {
  return <YearPicker defaultValue={new Date()}${props} />
}
`;

function Wrapper(props: YearPickerProps) {
  return (
    <Group position="center">
      <YearPicker defaultValue={new Date()} {...props} />
    </Group>
  );
}

export const sizeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' }],
};
