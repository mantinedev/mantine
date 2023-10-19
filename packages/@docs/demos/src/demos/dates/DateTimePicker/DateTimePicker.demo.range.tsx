import React from 'react';
import { DateTimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { DateTimePicker } from '@mantine/dates';

function Demo() {
  return <DateTimePicker
    label="Pick date and time"
    placeholder="Pick date and time"
    type="range"
  />;
}
`;

function Demo() {
  return (
    <DateTimePicker label="Pick date and time" placeholder="Pick date and time" type="range" />
  );
}

export const range: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
