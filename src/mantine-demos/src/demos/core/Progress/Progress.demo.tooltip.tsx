import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Progress } from '@mantine/core';

const code = `
import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress
      radius="xl"
      size={24}
      sections={[
        { value: 33, color: 'pink', label: 'Documents', tooltip: 'Document – 33 Gb' },
        { value: 28, color: 'grape', label: 'Apps', tooltip: 'Apps – 28 Gb' },
        { value: 25, color: 'violet', label: 'Other', tooltip: 'Other – 25 Gb' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      radius="xl"
      size={24}
      sections={[
        { value: 33, color: 'pink', label: 'Documents', tooltip: 'Document – 33 Gb' },
        { value: 28, color: 'grape', label: 'Apps', tooltip: 'Apps – 28 Gb' },
        { value: 25, color: 'violet', label: 'Other', tooltip: 'Other – 25 Gb' },
      ]}
    />
  );
}

export const tooltip: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
