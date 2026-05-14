import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Box, Button, Group, Portal, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              padding: 'var(--mantine-spacing-xs)',
              height: 60,
              zIndex: 1000000,
              transform: \`translate3d(0, \${pinned ? 0 : '-110px'}, 0)\`,
              transition: 'transform 400ms ease',
              backgroundColor: 'var(--mantine-color-body)',
            }}
          >
            <Group justify="center" h="100%">
              <Text>Pinned header – {pinned ? 'visible' : 'hidden'}</Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}
`;

function Demo() {
  const [showHeader, handlers] = useDisclosure(false);
  const { pinned } = useHeadroom({ fixedAt: 120 });

  return (
    <>
      {showHeader && (
        <Portal>
          <Box
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              padding: 'var(--mantine-spacing-xs)',
              height: 60,
              zIndex: 1000000,
              transform: `translate3d(0, ${pinned ? 0 : '-110px'}, 0)`,
              transition: 'transform 400ms ease',
              backgroundColor: 'var(--mantine-color-body)',
            }}
          >
            <Group justify="center" h="100%">
              <Text>Pinned header – {pinned ? 'visible' : 'hidden'}</Text>
            </Group>
          </Box>
        </Portal>
      )}

      <Button onClick={handlers.toggle} variant="default">
        {showHeader ? 'Hide' : 'Show'} header
      </Button>
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
};
