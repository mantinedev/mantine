import { Code, Text } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code, Text } from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';

const re = /^(\\d{1,2})\\.(\\d{1,2})\\.(\\d{4})$/;

const customPasteSplit = (value: string) => {
  const match = value.match(re);
  if (!match) {
    return { day: null, month: null, year: null };
  }

  return {
    day: Number(match[1]),
    month: Number(match[2]),
    year: Number(match[3]),
  };
};

function Demo() {
  return (
    <div>
      <MaskedDateInput label="Paste date here" pasteSplit={customPasteSplit} />
      <Text mt="md">
        Try pasting a date in DD.MM.YYYY format. For example, try pasting{' '}
        <Code>15.06.2000</Code>
      </Text>
    </div>
  );
}
`;

const re = /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/;

const customPasteSplit = (value: string) => {
  const match = value.match(re);
  if (!match) {
    return { day: null, month: null, year: null };
  }

  return {
    day: Number(match[1]),
    month: Number(match[2]),
    year: Number(match[3]),
  };
};

function Demo() {
  return (
    <div>
      <MaskedDateInput label="Paste date here" pasteSplit={customPasteSplit} />
      <Text mt="md">
        Try pasting a date in DD.MM.YYYY format. For example, try pasting <Code>15.06.2000</Code>
      </Text>
    </div>
  );
}

export const pasteSplit: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
