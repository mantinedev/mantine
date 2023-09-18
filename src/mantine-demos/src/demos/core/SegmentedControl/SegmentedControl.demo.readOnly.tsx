import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { SegmentedControl } from '@mantine/core';

const code = `
import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
`;

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
