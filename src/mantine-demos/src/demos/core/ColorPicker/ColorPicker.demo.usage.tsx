import React, { useState } from 'react';
import { MantineDemo } from '@mantine/ds';
import { ColorPicker, Text, Stack } from '@mantine/core';

const code = `
import { useState } from 'react';
import { ColorPicker, Text, Stack } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Stack align="center">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Stack>
  );
}
`;

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Stack align="center">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Stack>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
