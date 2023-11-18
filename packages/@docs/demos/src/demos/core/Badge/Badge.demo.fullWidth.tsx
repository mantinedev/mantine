import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Badge } from '@mantine/core';

const code = `
import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
`;

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}

export const fullWidth: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
