import { Box, Button, Group, Tooltip, useComputedColorScheme } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Button, Group, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Box
      bd="1px solid var(--mantine-color-dimmed)"
      p="xl"
      w={{ base: 340, sm: 400 }}
      h={200}
      style={{ overflow: 'auto' }}
    >
      <Box w={1000} h={400}>
        <Group>
          <Tooltip label="Hidden when detached" position="bottom" opened>
            <Button>Hides when detached</Button>
          </Tooltip>

          <Tooltip label="Visible when detached" position="bottom" opened hideDetached={false}>
            <Button>Stays visible</Button>
          </Tooltip>
        </Group>
      </Box>
    </Box>
  );
}
`;

function Demo() {
  const colorScheme = useComputedColorScheme();

  return (
    <Box
      bd="1px solid var(--mantine-color-dimmed)"
      p="xl"
      w={{ base: 340, sm: 400 }}
      h={200}
      style={{ overflow: 'auto', colorScheme }}
    >
      <Box w={1000} h={400}>
        <Group>
          <Tooltip label="Hidden when detached" position="bottom" opened>
            <Button>Hides when detached</Button>
          </Tooltip>

          <Tooltip label="Visible when detached" position="bottom" opened hideDetached={false}>
            <Button>Stays visible</Button>
          </Tooltip>
        </Group>
      </Box>
    </Box>
  );
}

export const hideDetached: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
