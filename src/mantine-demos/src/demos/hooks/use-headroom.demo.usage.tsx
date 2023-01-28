import React, { useEffect } from 'react';

import { ActionIcon, Box, Group, TextInput } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { useHeadroom } from '@mantine/hooks/src/use-headroom/use-headroom';
import { IconSearch } from '@tabler/icons';

const code = `
import { useWindowScroll } from '@mantine/hooks';
import { Button, Text, Group } from '@mantine/core';

function Demo() {
  const isPinned = useHeadroom();
  const transform = \`translate3d(0, $\{isPinned ? 0 : -50}px, 0)\`;

  useEffect(() => {
    document.body.style.height = '2000px';
  }, []);

  return (
    <Box style={{ position: 'fixed', left: 0, right: 0, top: 0, width: '100%' }} py={10}>
      <Group position="center">
        <TextInput
          radius={900}
          placeholder="Hide me until you need me..."
          style={{ transform, transition: 'all 0.4s', width: 300 }}
          rightSection={
            <ActionIcon radius={99} color="blue" variant="light">
              <IconSearch size={14} />
            </ActionIcon>
          }
        />
      </Group>
    </Box>
  );
}
`;

function Demo() {
  const isPinned = useHeadroom();
  const transform = `translate3d(0, ${isPinned ? 0 : -50}px, 0)`;

  useEffect(() => {
    document.body.style.height = '2000px';
  }, []);

  return (
    <Box style={{ position: 'fixed', left: 0, right: 0, top: 0, width: '100%' }} py={10}>
      <Group position="center">
        <TextInput
          radius={900}
          placeholder="Hide me until you need me..."
          style={{ transform, transition: 'all 0.4s', width: 300 }}
          rightSection={
            <ActionIcon radius={99} color="blue" variant="light">
              <IconSearch size={14} />
            </ActionIcon>
          }
        />
      </Group>
    </Box>
  );
}

export const useHeadroomDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
