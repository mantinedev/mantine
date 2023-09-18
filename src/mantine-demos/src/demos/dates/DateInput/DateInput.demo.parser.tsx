import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput, DateInputProps } from '@mantine/dates';

const code = `
import { DateInput, DateInputProps } from '@mantine/dates';

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return new Date(1939, 8, 1);
  }
  return new Date(input);
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}
`;

const dateParser: DateInputProps['dateParser'] = (input) => {
  if (input === 'WW2') {
    return new Date(1939, 8, 1);
  }
  return new Date(input);
};

function Demo() {
  return (
    <DateInput
      dateParser={dateParser}
      valueFormat="DD/MM/YYYY"
      label="Type WW2"
      placeholder="Type WW2"
    />
  );
}

export const parser: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
