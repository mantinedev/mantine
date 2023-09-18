import React from 'react';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantine/ds';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group position="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`;

export function Demo() {
  const [visible, { toggle }] = useDisclosure(true);
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        <AuthenticationForm noSubmit />
      </Box>

      <Group justify="center" mt="xl">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}

export const loaderProps: MantineDemo = {
  centered: true,
  maxWidth: 400,
  dimmed: true,
  type: 'code',
  code,
  component: Demo,
};
