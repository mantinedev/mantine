import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Rating } from '@mantine/core';

const code = `
import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
`;

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}

export const readOnly: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
