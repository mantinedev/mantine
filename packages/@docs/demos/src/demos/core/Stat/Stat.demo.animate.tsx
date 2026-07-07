import { useState } from 'react';
import { Button, Stack, Stat } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Stack, Stat } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(92410);

  return (
    <Stack align="flex-start">
      <Stat label="Active users" value={value} thousandSeparator animate />
      <Button onClick={() => setValue(Math.round(Math.random() * 100000))}>
        Update value
      </Button>
    </Stack>
  );
}
`;

function Demo() {
  const [value, setValue] = useState(92410);

  return (
    <Stack align="flex-start">
      <Stat label="Active users" value={value} thousandSeparator animate />
      <Button onClick={() => setValue(Math.round(Math.random() * 100000))}>Update value</Button>
    </Stack>
  );
}

export const animate: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
