import { useState } from 'react';
import { Text } from '@mantine/core';
import { getEndOfWeek, getStartOfWeek, WeekPicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Text } from '@mantine/core';
import { getEndOfWeek, getStartOfWeek, WeekPicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <>
      <WeekPicker value={value} onChange={setValue} />
      <Text mt="md" size="sm">
        Value: {value || '–'}
      </Text>
      <Text size="sm">
        Week: {value ? \`\${getStartOfWeek(value)} – \${getEndOfWeek(value)}\` : '–'}
      </Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <>
      <WeekPicker value={value} onChange={setValue} />
      <Text mt="md" size="sm">
        Value: {value || '–'}
      </Text>
      <Text size="sm">
        Week: {value ? `${getStartOfWeek(value)} – ${getEndOfWeek(value)}` : '–'}
      </Text>
    </>
  );
}

export const weekValue: MantineDemo = {
  type: 'code',
  centered: true,
  component: Demo,
  code,
};
