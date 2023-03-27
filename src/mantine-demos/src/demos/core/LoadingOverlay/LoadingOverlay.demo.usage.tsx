import React from 'react';
import { LoadingOverlay, Button, Group, useMantineTheme, Box, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';
import { demoBase } from './_demo-base';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box maw={400} pos="relative">
        <LoadingOverlay visible={visible} overlayBlur={2} />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;

export function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Box
        style={{
          borderRadius: rem(4),
          position: 'relative',
          margin: 'auto',
        }}
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          sx={{ borderRadius: rem(4) }}
          overlayBlur={2}
        />
        <AuthenticationForm noSubmit noShadow={theme.colorScheme === 'dark'} />
      </Box>

      <Group position="center" mt="xl">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}

export const usage: MantineDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};
