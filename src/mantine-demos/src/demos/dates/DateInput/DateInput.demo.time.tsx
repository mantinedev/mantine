import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { DateInput } from '@mantine/dates';

dayjs.extend(customParseFormat);

const code = `
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateInput } from '@mantine/dates';

// It is required to extend dayjs with customParseFormat plugin
// in order to parse dates with custom format
dayjs.extend(customParseFormat);

function Demo() {
  return (
    <DateInput
      valueFormat="DD/MM/YYYY HH:mm:ss"
      label="Date input"
      placeholder="Date input"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput valueFormat="DD/MM/YYYY HH:mm:ss" label="Date input" placeholder="Date input" />
  );
}

export const time: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 400,
  component: Demo,
  code,
};
