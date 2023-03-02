import React from 'react';
import { IconPaint } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { ColorInput, Box } from '@mantine/core';

const code = `
import { IconPaint } from '@tabler/icons-react';
import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Remove color preview */}
      <ColorInput
        label="Without preview"
        placeholder="No color preview"
        withPreview={false}
      />

      {/* Replace color preview with any React node */}
      <ColorInput
        icon={<IconPaint size="1rem" />}
        label="With icon"
        placeholder="With icon"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <ColorInput label="Without preview" placeholder="No color preview" withPreview={false} />

      <ColorInput
        mt="md"
        icon={<IconPaint size="1rem" />}
        label="With icon"
        placeholder="With icon"
      />
    </Box>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
